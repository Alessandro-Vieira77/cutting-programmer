import location from "/img/location.png";
import { ButtonService } from "../../components/buttonService/ButtonService";

export function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-F3F3F3 pl-4 pr-4">
      <header className="flex justify-center w-full">
        <div className="md:h-20  h-14 flex justify-center items-center bg-azul w-full max-w-5xl mt-2.5 rounded-xl">
          <h1 className="text-2xl font-bold text-white md:text-4xl italic">
            Agente seu corte
          </h1>
        </div>
      </header>
      <div className="flex justify-center w-full">
        <main className="flex flex-col items-center w-full max-w-5xl border-2 border-green-400 mt-7">
          <div className="w-full max-w-2xl h-48 md:w-full md:max-w-4xl md:h-60 bg-[url(/img/banner.png)]  bg-cover bg-center flex flex-col justify-end   border-2 border-amber-300 ml-4 mr-4">
            <p className="ml-2.5 md:ml-7 mb-2 md:mb-7 w-44 text-white text-sm md:text-base">
              [Nome da Barbearia] Santa Luzia - MA
            </p>
          </div>
          <section className=" w-full flex-wrap md:flex-nowrap max-w-5xl flex gap-7 mt-7 border-4 border-violet-900">
            {/* service and carrosel */}
            <div className="flex flex-col gap-7 w-full md:max-w-25.1">
              <div className="flex md:hidden justify-center items-center text-justify px-2 py-2 w-full  bg-azul rounded-lg">
                {/* description */}
                <p className="md:text-sm text-xs text-white">
                  Na [Nome da Barbearia], acreditamos que um bom corte de cabelo
                  e barba vão além da estética – é um momento de cuidado, estilo
                  e autoconfiança. Ofereça um ambiente moderno e acolhedor, com
                  profissionais experientes que entendem seu estilo e
                  proporcionam um atendimento personalizado.
                </p>
              </div>
              {/* service */}
              <div className="w-full md:max-w-25.1 bg-azul pl-5 pr-5 pb-5 border-2 rounded-xl">
                <h2 className="text-white font-medium text-base md:text-2xl mt-4">
                  Serviços
                </h2>
                <p className="text-white text-sm md:text-base mt-4">
                  Selecione abaixo qual serviço deseja realizar o agendamento
                </p>
                <div className="flex flex-col gap-2.5 w-full h-80 overflow-y-auto mt-6 text-sm md:text-base">
                  <ButtonService court="Corte Normal" />
                  <ButtonService court="Corte + Barba " />
                  <ButtonService court="Luzes" />
                  <ButtonService court="Degrader" />
                  <ButtonService court="selagem" />
                  <ButtonService court="Social" />
                  <ButtonService court="Social" />
                </div>
              </div>
              {/* carrosel */}
              <div className="w-full md:max-w-25.1 h-35.75  border-2 border-blue-400"></div>
            </div>
            {/* Description, contact and temps */}
            <div className="flex flex-col gap-7 w-full">
              {/* description */}
              <div className="hidden md:flex text-xs justify-center items-center text-justify px-4 py-4 w-full   bg-azul rounded-lg">
                <p className="lg:text-sm text-xs text-white">
                  Na [Nome da Barbearia], acreditamos que um bom corte de cabelo
                  e barba vão além da estética – é um momento de cuidado, estilo
                  e autoconfiança. Ofereça um ambiente moderno e acolhedor, com
                  profissionais experientes que entendem seu estilo e
                  proporcionam um atendimento personalizado.
                </p>
              </div>
              {/* location */}
              <div className="w-full bg-azul px-4 py-4 rounded-lg text-base md:text-2xl">
                <h2 className="text-white font-medium  mb-4">Contato</h2>
                <a
                  className="w-full"
                  href="https://maps.app.goo.gl/zTED8whM5cFkbYZk6"
                  target="_blank"
                >
                  <img
                    className="w-full bg-cover bg-center mb-4"
                    src={location}
                    alt="localização"
                  />
                </a>
                <p className="text-white font-medium">(98) 985467978</p>
              </div>
              {/* Horário */}
              <div className=" flex flex-col items-center gap-4 w-full  px-4 py-4 bg-azul text-white rounded-2xl">
                <h2 className="text-base md:text-2xl">
                  Horário de funcionamento
                </h2>
                <div className="w-20 md:w-24 bg-green-500 rounded-md px-1 py-1 text-center text-sm md:text-base">
                  Aberto
                </div>
                <div className="flex w-full justify-between">
                  <div className="flex flex-col gap-3.5 font-medium text-sm md:text-base">
                    <p>segunda-feira</p>
                    <p>terça-feira</p>
                    <p>quarta-feira</p>
                    <p>quinta-feira</p>
                    <p>sexta-feira</p>
                    <p>sábado</p>
                    <p>domingo</p>
                  </div>
                  <div className="flex flex-col gap-3.5 font-medium text-sm md:text-base">
                    <p>8:00 - 18:30</p>
                    <p>8:00 - 18:30</p>
                    <p>8:00 - 18:30</p>
                    <p>8:00 - 18:30</p>
                    <p>8:00 - 18:30</p>
                    <p>8:00 - 17:30</p>
                    <p>8:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
