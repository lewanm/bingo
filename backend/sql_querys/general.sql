create database bingo;
use bingo;
create table evento (
id int unsigned auto_increment primary key,
nombre varchar(50) not null,
especial bool not null 
);

select * from evento;

select * from evento
where especial = 0
order by rand();

select * from evento
where especial = 1
order by rand();

select * from evento
order by rand();

insert into evento (nombre,especial) values ("Hola",true);

insert into evento (nombre,especial) values 
("El relata mismo marxismo",false),
("El entrevista cuanto derecho nacional",false),
("El empapa algún dibujo",false),
("El confunde mucho daño",false),
("El derriba otro taxi",false),
("El corre poco favor",false),
("El sobresalta otro lazo",false),
("El libera demasiado fulgor",false),
("El labra poco banco",false),
("El funda mismísimo aparejo",false),
("El irgue mismísimo comunismo",false),
("El abunda escasísimo peso",false),
("El resuena algún mayo",false),
("El arrecia ningún laberinto",false),
("El respalda medio lirio",false),
("El llama algún superego",false),
("El concibe ninguno cartel",false),
("El arroja poco acierto",false),
("El alza un nombre",false),
("El conecta mucho complejo",false),
("El investiga ninguno derecho de uso",false),
("El subsiste ningún público",false),
("El formula cuanto antiguo régimen",false),
("El aturde cuanto torneo",false),
("El existe medio role playing",true),
("El compite un español",true),
("El pide mismo amigo",true),
("El rebaja algún molino",true),
("El transfiere mismo taller",true)
;

delete from evento where id = 1; 

INSERT INTO evento (nombre,especial) VALUES ("a",false);

SELECT * FROM evento
WHERE especial = 0
order by rand()
LIMIT 12;

(SELECT * from evento
WHERE especial = 0
LIMIT 12)
UNION
(SELECT * from evento
WHERE especial = 1
LIMIT 1)
UNION
(SELECT * from evento
WHERE especial = 0
LIMIT 12);

(select * from evento where especial = 0 order by rand() limit 12)
union
(select * from evento where especial = 1 order by rand() limit 1)
union
(select * from evento where especial = 0 order by rand())
limit 25;


