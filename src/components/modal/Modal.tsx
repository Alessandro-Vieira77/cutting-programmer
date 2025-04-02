import { FormEvent, useState, useContext, useEffect } from "react";
import { TimeContext } from "../../context/timeContext";
import { db } from "../../service/db";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";

// icons
import { IoClose } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BsCopy } from "react-icons/bs";

// img
import image1 from "/img/alessandro.jpg";
import image2 from "/img/rony.png";
// components

interface ModalProps {
  block: string;
  exit: () => void;
  court: string;
}

interface propsSchedule {
  typeCut: string;
  name: string;
  hours: string;
  professional: string;
  troco?: string;
  valueCut: string;
}

interface dbHoursProps {
  id: string;
  hours: string;
}

interface dbCortesProps {
  id: number;
  name: string;
  value: string;
}

export function Modal({ block, exit, court }: ModalProps) {
  const [copy, setCopy] = useState("copy");
  const [payment, setPayment] = useState("");
  const [buttonTime, setButtonTime] = useState("hidden");
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("");
  const [dataSchedule, setDataSchedule] = useState<propsSchedule>({
    typeCut: court,
    name: "",
    hours: selected,
    professional: "",
    troco: "",
    valueCut: "",
  });
  const [dbHours, setDbHoours] = useState<dbHoursProps[]>([]);
  const [dbCortes, setCortes] = useState<dbCortesProps[]>([]);

  const { hm } = useContext(TimeContext);

  function handleTime(e: FormEvent) {
    e.preventDefault();
    setButtonTime("block");
  }

  // copiar o pix
  function copyToClipBoard(e: FormEvent) {
    e.preventDefault();
    const navi = navigator.clipboard
      .writeText("(98) 985825422")
      .then(() => {
        setCopy("copied");
        setTimeout(() => setCopy("copy"), 2000);
      })
      .catch((err) => {
        console.error("erro em copiar o texto", err);
      });
    return navi;
  }

  useEffect(() => {
    async function getHoursTime() {
      const querySnapshot = await collection(db, "db");
      const queryRef = query(querySnapshot, orderBy("id", "asc"));
      const onSub = onSnapshot(queryRef, (snapshot) => {
        let dbArray = [] as dbHoursProps[];

        snapshot.forEach((doc) => {
          dbArray.push({
            id: doc.data().id,
            hours: doc.data().hours,
          });
        });
        setDbHoours(dbArray);
      });

      onSub;
    }
    getHoursTime();

    async function getCorte() {
      const queryCorte = await collection(db, "cortes");
      const queryRef = query(queryCorte, orderBy("id", "asc"));
      const onSub = onSnapshot(queryRef, (snapshot) => {
        let corteArray = [] as dbCortesProps[];
        snapshot.forEach((doc) => {
          corteArray.push({
            id: doc.data().id,
            name: doc.data().name,
            value: doc.data().value,
          });
        });
        setCortes(corteArray);
      });

      onSub;
    }

    getCorte();
  }, []);

  const filterPrice = dbCortes.filter((item) => {
    if (item.name == court) {
      return item.value;
    }
  });

  console.log(dataSchedule);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(dataSchedule);
  }

  return (
    <div
      className={
        block === "block"
          ? "absolute flex justify-center left-0 top-0 w-full max-w-full h-full max-h-full bg-black/70 bg-opacity-25 z-30"
          : "hidden"
      }
    >
      <div className="bg-azul top-96 rounded-2xl border-2 border-white absolute p-5 mx-4">
        <h2 className="text-white font-medium text-2xl w-full text-center mb-5">
          {court}
        </h2>
        <button
          className="text-red-500 absolute right-0 top-0 mt-1 mr-1 cursor-pointer"
          onClick={() => exit()}
        >
          <IoClose size={40} />
        </button>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex justify-between md:gap-28 w-full flex-wrap md:flex-nowrap "
        >
          {/* nome, horário e agendar */}
          <div className="flex flex-col w-full">
            <label
              className="text-base text-white font-medium mb-1"
              htmlFor="nome"
            >
              Nome
            </label>
            <input
              className="flex self-center w-full md:w-80  h-8 pl-2 bg-white rounded-sm mb-5"
              type="text"
              name="nome"
              placeholder="Digite seu nome.."
              value={dataSchedule.name}
              onChange={(e) =>
                setDataSchedule({
                  ...dataSchedule,
                  name: e.target.value,
                  valueCut: filterPrice[0].value,
                })
              }
            />
            {/* time */}
            <div className="w-full mb-4">
              <button
                onClick={handleTime}
                className="w-16 h-6 text-base bg-white  text-center font-medium  mb-2 rounded-sm cursor-pointer"
              >
                Horários
              </button>

              <div className={buttonTime == "block" ? "block" : "hidden"}>
                {/* time */}
                <div className="grid grid-cols-5 gap-1.5 bg-white rounded-sm border-2 px-1 py-1">
                  {dbHours.map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        className="hidden peer"
                        type="radio"
                        name="time"
                        value={item.hours}
                        checked={selected === item.hours}
                        onChange={(e) => {
                          setSelected(item.hours);
                          setDataSchedule({
                            ...dataSchedule,
                            hours: e.target.value,
                          });
                        }}
                      />
                      <div className="flex justify-center items-center bg-azul  text-white font-medium w-14 h-5   rounded-sm  peer-checked:bg-green-500">
                        {item.hours}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-base text-white font-medium md:mb-5">
              {`Valor R$ ${filterPrice[0]?.value || "N/A"}`}
            </p>
            {/* agendar */}
            {hm > 18.29 || hm < 7.59 ? (
              <button
                type="button"
                className=" hidden md:flex items-center justify-center gap-1 text-white font-bold w-32 h-9 bg-red-700 rounded-lg cursor-pointer"
              >
                fechado <IoLogoWhatsapp size={25} />
              </button>
            ) : (
              <button
                type="submit"
                className=" hidden md:flex items-center justify-center gap-1 text-white font-bold w-40 h-9 bg-green-700 rounded-lg cursor-pointer"
              >
                Agendar corte <IoLogoWhatsapp size={25} />
              </button>
            )}
          </div>
          {/* selecione o profissional e pagamento */}
          <div className="flex flex-col w-full">
            <div>
              <h2 className="text-base text-white font-medium mb-5 mt-5 md:mt-0">
                Selecione o profissional
              </h2>
              {/* select profissional */}
              <div className="radio-container mb-5">
                <div className="w-full flex justify-center gap-4">
                  <label className="custom-radio flex flex-col items-center ">
                    <input
                      className="hidden peer"
                      type="radio"
                      name="professional"
                      value="Alessandro"
                      checked={selected2 === "Alessandro"}
                      onChange={(e) => {
                        setSelected2(e.target.value);
                        setDataSchedule({
                          ...dataSchedule,
                          professional: e.target.value,
                        });
                      }}
                    />
                    <span className="flex justify-center items-center w-11 h-11 rounded-full mb-1 peer-checked:bg-green-500">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={image1}
                        alt="profissiona 1"
                      />
                    </span>
                    <p className="text-white text-sm">Engenheiro de Software</p>
                  </label>

                  <label className="custom-radio flex-col items-center ">
                    <input
                      className=" hidden peer"
                      type="radio"
                      name="professional"
                      value="Rony"
                      checked={selected2 === "Rony"}
                      onChange={(e) => {
                        setSelected2(e.target.value);
                        setDataSchedule({
                          ...dataSchedule,
                          professional: e.target.value,
                        });
                      }}
                    />
                    <span className="flex justify-center items-center w-11 h-11 rounded-full mb-1 peer-checked:bg-green-500">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={image2}
                        alt="profissional 2"
                      />
                    </span>
                    <p className="text-white text-sm">Agrônomo</p>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <label
                className="text-base text-white font-medium mb-1"
                htmlFor="pagamento"
              >
                Forma de pagamento
              </label>
              <div className="flex gap-6">
                <div className="flex">
                  <label
                    className="text-base text-white font-medium mr-2"
                    htmlFor="pagamento"
                  >
                    Pix
                  </label>
                  <input
                    type="radio"
                    name="pagamento"
                    value="pix"
                    checked={payment === "pix"}
                    onChange={(e) => setPayment(e.target.value)}
                  />
                </div>
                <div className="flex">
                  <label
                    className="text-base text-white font-medium mr-2"
                    htmlFor="pagamento"
                  >
                    Dinheiro
                  </label>
                  <input
                    type="radio"
                    name="pagamento"
                    value="dinheiro"
                    checked={payment === "dinheiro"}
                    onChange={(e) => {
                      setPayment(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* pix */}
              <div className={payment === "pix" ? "flex flex-col" : "hidden"}>
                <div className="flex  w-32  gap-2 items-center justify-center bg-white mt-1.5 rounded-sm">
                  <p>(98) 985789046</p>
                </div>
                <button
                  className="flex gap-1 items-center w-20 cursor-pointer mt-1.5 font-medium"
                  style={{
                    color: copy === "copied" ? "#5bd279" : "#FFF",
                  }}
                  onClick={copyToClipBoard}
                >
                  <BsCopy />
                  {copy}
                </button>
              </div>
            </div>

            {/* troco */}
            <div className={payment === "dinheiro" ? "mt-1.5" : "hidden"}>
              <label className="text-white font-medium mr-1.5" htmlFor="troco">
                troco para?
              </label>
              <input
                className="bg-white w-11 text-center rounded-sm"
                type="number"
                name="troco"
                value={dataSchedule.troco}
                onChange={(e) =>
                  setDataSchedule({ ...dataSchedule, troco: e.target.value })
                }
              />
            </div>

            {hm > 18.29 || hm < 7.59 ? (
              <button
                type="button"
                className="md:hidden flex mt-5 items-center justify-center gap-1 text-white font-bold w-32 h-9 bg-red-700 rounded-lg cursor-pointer"
              >
                Fechado <IoLogoWhatsapp size={25} />
              </button>
            ) : (
              <button
                type="submit"
                className="md:hidden flex mt-5 items-center justify-center gap-1 text-white font-bold w-40 h-9 bg-green-700 rounded-lg cursor-pointer"
              >
                Agendar corte <IoLogoWhatsapp size={25} />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
