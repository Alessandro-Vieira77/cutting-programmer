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
          ? "absolute flex justify-center left-0 top-0 w-full h-full max-h-full border-2 border-amber-300 bg-black/70 bg-opacity-25 z-30 "
          : "hidden"
      }
    >
      <div className="w-4xl h-96 bg-azul relative top-96 rounded-2xl border-2 border-white">
        <h2 className="text-red-500 ">{court}</h2>
        <button onClick={() => exit()}>
          <IoClose size={40} />
        </button>
        <form className="flex">
          <div className="flex flex-col">
            <label htmlFor="nome">Nome</label>
            <input
              className=""
              type="text"
              name="nome"
              placeholder="Digite seu nome"
            />
            <label htmlFor="time">Horário</label>
            <input className="w-24" type="time" name="time" />
            <p>Valor R$15</p>
            <button className="flex">
              Agendar corte <IoLogoWhatsapp />
            </button>
          </div>
          <div className="flex flex-col">
            <div>
              <h2>Selecione o profissional para o corte</h2>
              <div className="flex flex-col-reverse items-center">
                <label htmlFor="profi1">Profissional 1</label>
                <input type="checkbox" name="profi1" />
              </div>
              <div className="flex flex-col-reverse items-center">
                <label htmlFor="profi2">Profissional 2</label>
                <input type="checkbox" name="profi2" />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="pagamento">Forma de pagamento</label>
              <div className="flex">
                <div className="flex">
                  <label htmlFor="pix">Pix</label>
                  <input type="radio" name="pix" />
                </div>
                <div className="flex">
                  <label htmlFor="dinheiro">Dinheiro</label>
                  <input type="radio" name="dinheiro" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
