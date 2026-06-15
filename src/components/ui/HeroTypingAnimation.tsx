import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  BotMessageSquare,
  Search,
  TriangleAlert,
  Lightbulb,
  Rocket,
  CheckCircle2,
} from 'lucide-react';

export function HeroTypingAnimation() {
  const [step, setStep] = useState(0);

  return (
    <div className="space-y-3 font-mono text-white">
  
      <div className="flex items-center gap-2">
        <BotMessageSquare size={18} className="text-[#FE701A]" />

        <TypeAnimation
          sequence={[
            '> iniciando_diagnostico()',
            () => setStep(1),
          ]}
          speed={50}
          cursor={false}
          repeat={0}
        />
      </div>
      
      {step >= 1 && (
        <div className="flex items-center gap-2 text-slate-300">
          <Search size={16} />

          <TypeAnimation
            sequence={[
              'Mapear processo atual',
              () => setStep(2),
            ]}
            speed={50}
            cursor={false}
            repeat={0}
          />
        </div>
      )}
   
      {step >= 2 && (
        <div className="flex items-center gap-2 text-slate-300">
          <TriangleAlert size={16} />

          <TypeAnimation
            sequence={[
              'Identificar gargalos',
              () => setStep(3),
            ]}
            speed={60}
            cursor={false}
            repeat={0}
          />
        </div>
      )}
     
      {step >= 3 && (
        <div className="flex items-center gap-2 text-slate-300">
          <Lightbulb size={16} />

          <TypeAnimation
            sequence={[
              'Propor solução sob medida',
              () => setStep(4),
            ]}
            speed={60}
            cursor={false}
            repeat={0}
          />
        </div>
      )}
    
      {step >= 4 && (
        <div className="flex items-center gap-2 text-slate-300">
          <Rocket size={16} />

          <TypeAnimation
            sequence={[
              'Entregar evolução contínua',
              () => setStep(5),
            ]}
            speed={60}
            cursor={false}
            repeat={0}
          />
        </div>
      )}

      {step >= 5 && (
        <div className="mt-4 flex items-center gap-2 text-[#FE701A]">
          <CheckCircle2 size={16} />

          <TypeAnimation
            sequence={['status: pronto_para_evoluir']}
            speed={70}
            cursor
            repeat={0}
          />
        </div>
      )}
    </div>
  );
}