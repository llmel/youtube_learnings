create database cv_cadastro
default character set utf8
default collate utf8_general_ci;

use cv_cadastro;

create table cv_pessoas (
	id int not null auto_increment,
    nome varchar(30) not null,
    nascimento date,
    sexo enum('M','F'),
    peso decimal(5,2),
    altura decimal(3,2),
    nacionalidade v-archar(20) default 'Brasil',
    primary key (id)
) default charset = utf8;

show tables;
describe cv_pessoas;

-- Insert considerando o campo ID
insert into cv_pessoas
(id,nome,nascimento,sexo,peso,altura,nacionalidade)
values
('1','Godofredo','1984-01-02','M','78.5','1.83','Brasil');
-- Insert sem o campo ID, já que ele é auto incrementável
insert into cv_pessoas
(nome,nascimento,sexo,peso,altura,nacionalidade)
values
('Maria','1999-12-30','F','55.2','1.65','Portugal');
-- Podemos manter a coluna ID, mas sem passar um dado, e sim uma constraint
insert into cv_pessoas
(id,nome,nascimento,sexo,peso,altura,nacionalidade)
values
(default,'Creusa','1920-12-30','F','50.2','1.65',default);
-- Exemplos sem especificar colunas e mais de um registro por vez
insert into cv_pessoas values
(default,'Cláudio','1975-04-22','M','99.0','2.15','Brasil'),
(default,'Pedro','1999-12-03','M','87','2',default),
(default,'Janaína','1987-11-12','F','75.4','1.66','EUA');

select * from cv_pessoas


