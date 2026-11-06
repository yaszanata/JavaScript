create schema clinica_veterinaria_PBE;

create table clinica_veterinaria_PBE.atendimentos(
	id SERIAL primary key,
	pet VARCHAR not null,
	raca VARCHAR not null,
	idade INT not null,
	tutor VARCHAR not null,
	dia_atendimento DATE not null,
	valor_gasto INT not null
);

insert into clinica_veterinaria_PBE.atendimentos
(pet, raca, idade, tutor, dia_atendimento, valor_gasto)
values
('Mel' ,'Shih-tzu ',4 ,'Mariana Costa' , '2026-09-01', 180),
('Thor',' Golden Retriever', 8, 'Rafael Lima', '2026-09-02', 320);

select * from clinica_veterinaria_PBE.atendimentos;