import { memo } from 'react';
import icon_right from '../assets/right.svg';
import icon_start from '../assets/start.svg';
import Button from '../components/Button';

interface PlanoType {
    id: number;
    plano: string;
    valor: string;
    mensalidade?: string;
    obs: { [key: number]: string };
    incluso?: { [key: number]: string };
    "tudo grátis"?: { [key: number]: string };
}

const planos: Record<string, PlanoType> = {
    'plano 1': {
        id: 1,
        plano: 'Só por hobby',
        valor: 'Gratis',
        obs: { 1: 'Incluso:' },
        incluso: {
            1: '100 mini projetos para resolver',
            2: '1 workshop gratuito',
            3: '10+ APIS para acesso de requests'
        }
    },
    'plano 2': {
        id: 2,
        plano: 'Plano PRO',
        valor: 'R$ 29,90',
        mensalidade: '/mês',
        obs: { 1: 'Tudo do plano grátis e mais:' },
        "tudo grátis": {
            1: '1000 mini projetos para resolver',
            2: 'Comunidade exclusiva para dúvidas',
            3: '40 workshops atualizados para assistir'
        }
    },
    'plano 3': {
        id: 3,
        plano: 'Empresas',
        valor: 'R$ 49,90',
        mensalidade: '/mês',
        obs: { 1: 'Tudo do plano grátis e mais:' },
        "tudo grátis": {
            1: 'Assessoria exclusiva para dúvidas',
            2: 'Criação de plano de estudos',
            3: 'Lives semanais de novas tecnologias'
        }
    }
};

export default memo(function Plano() {
    return (
        <>
            <article className='div-container-app'>


                {Object.values(planos).map((plano) => {
                    const isGratis = plano.valor === 'Gratis';

                    return (
                        <div key={plano.id} className="div-container-app-border">
                            <div className={`div-container-app-card card${plano.id}`}>

                                <h1>{plano.plano}</h1>
                                <h2>{plano.valor} <span>{plano.mensalidade || ''}</span></h2>
                                <hr />

                                <h3>{plano.obs[1]}</h3>

                                <ul>
                                    {Object.values(plano.incluso || plano["tudo grátis"] || {}).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                {isGratis ? (
                                    <Button value="CONTINUAR" img={icon_right} />
                                ) : (
                                    <Button value="COMECE AGORA" img={icon_start} />
                                )}
                            </div>
                        </div>
                    );
                })}
            </article>
        </>
    );
});
