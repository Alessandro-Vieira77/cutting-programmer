import { IoClose } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";

interface ModalProps {
  block: string;
  exit: () => void;
  court: string;
}

export function Modal({ block, exit, court }: ModalProps) {
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

        <form className="flex justify-between max-w-full flex-wrap md:flex-nowrap gap-5">
          {/* nome, horário e agendar */}
          <div className="flex flex-col w-full">
            <label
              className="text-base text-white font-medium mb-1"
              htmlFor="nome"
            >
              Nome
            </label>
            <input
              className="flex self-center w-full md:max-w-80 h-8 pl-2 bg-white rounded-sm mb-5"
              type="text"
              name="nome"
              placeholder="Digite seu nome.."
            />
            <label
              className="text-base text-white font-medium mb-1"
              htmlFor="time"
            >
              Horário
            </label>
            <input
              className="w-87.5 bg-white h-8 rounded-sm pl-2 mb-5"
              type="time"
              name="time"
              placeholder="00:00"
            />
            <p className="text-base text-white font-medium md:mb-5">
              Valor R$15
            </p>
            {/* agendar */}
            <button
              type="submit"
              className=" hidden md:flex items-center justify-center gap-1 text-white font-bold w-40 h-9 bg-green-700 rounded-lg cursor-pointer"
            >
              Agendar corte <IoLogoWhatsapp size={25} />
            </button>
          </div>
          {/* selecione o profissional e pagamento */}
          <div className="flex flex-col w-full">
            <div>
              <h2 className="text-base text-white font-medium mb-5">
                Selecione o profissional para o corte
              </h2>
              {/* profissional */}
              <div className="flex self-center gap-4 justify-center w-full mb-5">
                <div className="flex flex-col-reverse items-center">
                  <label
                    className="text-base text-white font-medium mt-1"
                    htmlFor="profi"
                  >
                    Profissional 1
                  </label>
                  <input type="radio" name="profi" value={"proficional1"} />
                </div>
                <div className="flex flex-col-reverse items-center">
                  <label
                    className="text-base text-white font-medium mt-1"
                    htmlFor="profi"
                  >
                    Profissional 2
                  </label>
                  <input type="radio" name="profi" value={"profissional2"} />
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
                  <input type="radio" name="pagamento" value={"Pix"} />
                </div>
                <div className="flex">
                  <label
                    className="text-base text-white font-medium mr-2"
                    htmlFor="pagamento"
                  >
                    Dinheiro
                  </label>
                  <input type="radio" name="pagamento" value={"dinheiro"} />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="md:hidden flex mt-5 items-center justify-center gap-1 text-white font-bold w-40 h-9 bg-green-700 rounded-lg cursor-pointer"
            >
              Agendar corte <IoLogoWhatsapp size={25} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
