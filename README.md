# Minesweeper

This site is published at https://webdevelopment4everybody.github.io/11-minesweeper/.

Apribojimai:
- bent vienas langelis be bombos
- mažiausiai bombų:1
- daugiausiai bombų: (MxN)-1

Lentos dydis:
- mažiausias:  2x1
- didžiausias: MxN

Žaidimo logika:
- laikrodžio pradinė reikšmė: 0s
- max laikrodžio reikšmė: 999s
- paspaudus ant langelio:
    - jei tai pirmas kartas:
        - sugeneruojame bombas
    - atidaromas langelis
    - patikriname, ar jame nėra bombos
        - jei yra: GAME OVER
        - jei nėra: skaičiuojame kiek aplinkui yra bombų
            - į atidarytą langelį įrašome suskaičiuitą kiekį
            - jeigu bombų nėra (kiekis nulis), tai atidarinėjame sekančius aplinkinius langelius


