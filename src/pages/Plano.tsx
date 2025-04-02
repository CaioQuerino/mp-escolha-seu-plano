import React, { memo } from 'react'

export default memo(function Plano() {
    const planos = {
        'plano 1': {
            'id': 1,
            'plano': 'Só por hobby',
            'valor': 'Gratis',
            'incluso': {
                '1': '100 mini projetos para resolver',
                '2': '1 workshop gratuito',
                '3': '10+ APIS para acesso de requests'
            }
        },
        'plano 2': {
            'id': 2,
            'plano': 'Plano PRO',
            'valor': 'R$ 29,90',
            'mensalidade': '/mês',
            'tudo grátis': {
                '1': '1000 mini projetos para resolver',
                '2': 'Comunidade exclusiva para dúvidas',
                '3': '40 workshops atualizados para assistir'
            }
        },
        'plano 3': {
            'id': 3,
            'plano': 'Empresas',
            'valor': 'R$ 49,90',
            'mensalidade': '/mês',
            'tudo grátis': {
                '1': 'Assessoria exclusiva para dúvidas',
                '2': 'Criação de plano de estudos',
                '3': 'Lives semanais de novas tecnologias'
            }
        }
    }

    return (
        <div className='div-container-app'>
            {Object.keys(planos).map((key) => {
                const plano = planos[key];
                return (
                    <div key={plano.id} className="div-container-app-border">
                        <div className={`div-container-app-card card${plano.id}`}>
                            <h1>{plano.plano}</h1>
                            <h2>{plano.valor} <span>{plano.mensalidade || ''}</span></h2>
                            <h3>Incluso:</h3>
                            <ul>
                                {Object.values(plano.incluso || plano['tudo grátis']).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );
});
