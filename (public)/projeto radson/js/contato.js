 feather.replace();

        const btnContato = document.getElementById('btn-contato');
        const btnTrabalhe = document.getElementById('btn-trabalhe');
        const contatoSection = document.getElementById('contato-section');
        const trabalheSection = document.getElementById('trabalhe-section');

        function ativarBotao(selecionado, outro) {
            // Botão selecionado vermelho
            selecionado.classList.add('bg-red-600', 'text-white');
            selecionado.classList.remove('bg-red-300', 'text-gray-800');

            // Botão não selecionado cinza
            outro.classList.add('bg-gray-300', 'text-gray-800');
            outro.classList.remove('bg-red-600', 'text-white');
        }

        btnContato.addEventListener('click', () => {
            contatoSection.classList.remove('hidden');
            trabalheSection.classList.add('hidden');
            ativarBotao(btnContato, btnTrabalhe);
        });

        btnTrabalhe.addEventListener('click', () => {
            trabalheSection.classList.remove('hidden');
            contatoSection.classList.add('hidden');
            ativarBotao(btnTrabalhe, btnContato);
        });
