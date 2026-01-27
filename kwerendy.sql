Cieślak:

SELECT * FROM osoba;
SELECT imie, nazwisko FROM osoba;
SELECT imie, placa FROM osoba;
SELECT * FROM osoba WHERE plec = 'M';
SELECT * FROM osoba WHERE placa > 4000;
SELECT * FROM osoba WHERE placa < 6000;
SELECT * FROM osoba WHERE imie = 'Jan';
SELECT * FROM osoba WHERE nazwisko LIKE 'K%';
SELECT * FROM osoba ORDER BY nazwisko;
SELECT * FROM osoba ORDER BY placa DESC;





Burzyński:
SELECT nazwisko FROM osoba;
SELECT DISTINCT plec FROM osoba;
SELECT * FROM osoba WHERE placa BETWEEN 3000 AND 5000;
SELECT * FROM osoba WHERE plec = 'K' AND placa > 4000;
SELECT * FROM osoba WHERE plec = 'M' OR placa < 3500;
SELECT * FROM osoba WHERE imie = 'Anna';
SELECT * FROM osoba ORDER BY imie DESC;
SELECT imie, nazwisko, placa FROM osoba ORDER BY placa;
SELECT * FROM osoba WHERE nazwisko LIKE '%a';
SELECT * FROM osoba LIMIT 5;




Damianek:
SELECT imie FROM osoba;
SELECT nazwisko FROM osoba;
SELECT imie, nazwisko, placa FROM osoba;
SELECT * FROM osoba WHERE plec = 'K';
SELECT * FROM osoba WHERE plec = 'M';
SELECT * FROM osoba WHERE placa >= 4000;
SELECT * FROM osoba WHERE placa <= 6000;
SELECT * FROM osoba WHERE rok_biezacy = 2026;
SELECT * FROM osoba ORDER BY placa;
SELECT * FROM osoba ORDER BY imie DESC;


Kiczul:
SELECT * FROM osoba;
SELECT imie FROM osoba;
SELECT nazwisko FROM osoba;
SELECT imie, nazwisko FROM osoba;
SELECT * FROM osoba WHERE placa > 3000;
SELECT * FROM osoba WHERE placa < 7000;
SELECT * FROM osoba WHERE plec = 'K' AND placa > 4000;
SELECT * FROM osoba WHERE plec = 'M' AND placa < 5000;
SELECT DISTINCT rok_biezacy FROM osoba;
SELECT * FROM osoba LIMIT 3;

Bugaj:
SELECT imie, placa FROM osoba;
SELECT nazwisko, placa FROM osoba;
SELECT * FROM osoba WHERE placa = 5000;
SELECT * FROM osoba WHERE placa >= 4500 AND placa <= 6500;
SELECT * FROM osoba WHERE plec = 'K' AND rok_biezacy = 2026;
SELECT * FROM osoba WHERE plec = 'M' AND rok_biezacy = 2026;
SELECT * FROM osoba ORDER BY nazwisko;
SELECT * FROM osoba ORDER BY placa DESC;
SELECT DISTINCT plec FROM osoba;
SELECT * FROM osoba LIMIT 10;

Krystian:
SELECT * FROM osoba;
SELECT imie, nazwisko, cena FROM osoba WHERE cena > 500;
SELECT nazwisko, plec, cena FROM osoba WHERE cena < 1000;
SELECT imie, placa, cena FROM osoba WHERE imie LIKE 'M%';
SELECT imie, rok_biezacy, cena FROM osoba WHERE cena BETWEEN 400 AND 800;
SELECT nazwisko, placa, cena FROM osoba WHERE nazwisko LIKE '%ski' AND cena > 600;
SELECT imie, nazwisko, cena FROM osoba WHERE plec = 'K' AND cena < 900;
SELECT plec, rok_biezacy, cena FROM osoba WHERE cena >= 300;
SELECT imie, nazwisko ORDER BY cena;
SELECT imie, placa, cena ORDER BY cena DESC; 