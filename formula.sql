-- -------------------------------------------------------------
-- TablePlus 5.4.0(504)
--
-- https://tableplus.com/
--
-- Database: formula
-- Generation Time: 2023-09-26 16:11:59.9730
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS circuits_id_seq;

-- Table Definition
CREATE TABLE "public"."circuits" (
    "id" int4 NOT NULL DEFAULT nextval('circuits_id_seq'::regclass),
    "name" text NOT NULL,
    "localisation" text NOT NULL,
    "length" float8,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS competitions_id_seq;

-- Table Definition
CREATE TABLE "public"."competitions" (
    "id" int4 NOT NULL DEFAULT nextval('competitions_id_seq'::regclass),
    "name" text NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS drivers_id_seq;

-- Table Definition
CREATE TABLE "public"."drivers" (
    "id" int4 NOT NULL DEFAULT nextval('drivers_id_seq'::regclass),
    "first_name" text NOT NULL,
    "last_name" text NOT NULL,
    "number" int4 NOT NULL,
    "team_id" int4 NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS drivers_races_id_seq;

-- Table Definition
CREATE TABLE "public"."drivers_races" (
    "id" int4 NOT NULL DEFAULT nextval('drivers_races_id_seq'::regclass),
    "driver_id" int4 NOT NULL,
    "race_id" int4 NOT NULL,
    "rank" int4 NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS races_id_seq;

-- Table Definition
CREATE TABLE "public"."races" (
    "id" int4 NOT NULL DEFAULT nextval('races_id_seq'::regclass),
    "name" text NOT NULL,
    "year" int4 NOT NULL,
    "round" int4 NOT NULL,
    "circuit_id" int4 NOT NULL,
    "competition_id" int4 NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS rankings_id_seq;

-- Table Definition
CREATE TABLE "public"."rankings" (
    "id" int4 NOT NULL DEFAULT nextval('rankings_id_seq'::regclass),
    "rank" int4 NOT NULL,
    "point" int4 NOT NULL,
    "competition_id" int4 NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS teams_id_seq;

-- Table Definition
CREATE TABLE "public"."teams" (
    "id" int4 NOT NULL DEFAULT nextval('teams_id_seq'::regclass),
    "name" text NOT NULL,
    "location" text NOT NULL,
    "competition_id" int4 NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS users_id_seq;
DROP TYPE IF EXISTS "public"."enum_users_role";
CREATE TYPE "public"."enum_users_role" AS ENUM ('ADMIN', 'READER');

-- Table Definition
CREATE TABLE "public"."users" (
    "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    "username" text NOT NULL,
    "password" text NOT NULL,
    "token" text,
    "role" "public"."enum_users_role" DEFAULT 'READER'::enum_users_role,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."circuits" ("id", "name", "localisation", "length") VALUES
(1, 'Mexico city', 'Mexico', 2.63),
(2, 'Diriyah', 'Saudi Arabia', 2.495),
(3, 'Sao Paulo', 'Brazil', 2.933),
(4, 'Hyderabad', 'India', 2.835),
(5, 'Cape Town', 'South Africa', 2.921);

INSERT INTO "public"."competitions" ("id", "name") VALUES
(1, 'Formula E');

INSERT INTO "public"."drivers" ("id", "first_name", "last_name", "number", "team_id") VALUES
(1, 'Jack', 'Denis', 1, 3),
(2, 'Pascal', 'Wehrlein', 2, 12),
(3, 'Lucas', 'Di Grassi', 3, 7),
(4, 'André', 'Lotterer', 4, 3),
(5, 'Jake', 'Hugues', 5, 9),
(6, 'Sébastien', 'Buemi', 6, 5),
(7, 'Antonio Félic', 'Da Costa', 7, 12),
(8, 'Mitch', 'Evans', 8, 6),
(9, 'Nick', 'Cassidy', 9, 5),
(10, 'Stoffel', 'Vandorne', 10, 4),
(11, 'Maximilian', 'Gunther', 11, 8),
(12, 'Jean-Eric', 'Vergne', 12, 4),
(13, 'Oliver', 'Rowland', 13, 7),
(14, 'Nico', 'Müller', 14, 2),
(15, 'Sacha ', 'Fenestraz', 15, 11),
(16, 'Sergio', 'Sette Camara', 16, 10),
(17, 'Dan', 'Ticktum', 17, 10),
(18, 'René', 'Rast', 18, 9),
(19, 'Edoardo', 'Mortara', 19, 8),
(20, 'Robin', 'Frijns', 20, 2),
(21, 'Sam', 'Bird', 21, 6),
(22, 'Norman', 'Nato', 22, 11);

INSERT INTO "public"."drivers_races" ("id", "driver_id", "race_id", "rank") VALUES
(1, 1, 1, 1),
(2, 2, 1, 2),
(3, 3, 1, 3),
(4, 4, 1, 4),
(5, 5, 1, 5),
(6, 6, 1, 6),
(7, 7, 1, 7),
(8, 8, 1, 8),
(9, 9, 1, 9),
(10, 10, 1, 10),
(11, 11, 1, 11),
(12, 12, 1, 12),
(13, 13, 1, 13),
(14, 14, 1, 14),
(15, 15, 1, 15),
(16, 16, 1, 16),
(17, 17, 1, 17),
(18, 18, 1, 18),
(19, 19, 1, 19),
(20, 20, 1, 20),
(21, 21, 1, 21),
(22, 22, 1, 22),
(39, 2, 2, 1),
(40, 1, 2, 2),
(41, 21, 2, 3),
(42, 6, 2, 4),
(43, 18, 2, 5),
(44, 9, 2, 6),
(45, 12, 2, 7),
(46, 5, 2, 8),
(47, 4, 2, 9),
(48, 8, 2, 10),
(49, 10, 2, 11),
(50, 22, 2, 12),
(51, 3, 2, 13),
(52, 17, 2, 14),
(53, 16, 2, 15),
(54, 15, 2, 17),
(55, 7, 2, 18),
(56, 13, 2, 19),
(57, 19, 2, 20),
(58, 11, 2, 21),
(59, 14, 2, 22),
(60, 2, 3, 1),
(61, 1, 3, 2),
(62, 18, 3, 3),
(63, 21, 3, 4),
(64, 5, 3, 5),
(65, 6, 3, 6),
(66, 8, 3, 7),
(67, 15, 3, 8),
(68, 19, 3, 9),
(69, 17, 3, 10),
(70, 7, 3, 11),
(71, 4, 3, 12),
(72, 9, 3, 13),
(73, 22, 3, 14),
(74, 3, 3, 15),
(75, 12, 3, 16),
(76, 16, 3, 17),
(77, 11, 3, 19),
(78, 10, 3, 20),
(79, 13, 3, 21),
(80, 14, 3, 22),
(81, 12, 4, 1),
(82, 9, 4, 2),
(83, 7, 4, 3),
(84, 2, 4, 4),
(85, 16, 4, 5),
(86, 13, 4, 6),
(87, 22, 4, 7),
(88, 10, 4, 8),
(89, 4, 4, 9),
(90, 19, 4, 10),
(91, 14, 4, 11),
(92, 15, 4, 12),
(93, 11, 4, 13),
(94, 3, 4, 14),
(95, 6, 4, 15),
(96, 1, 4, 16),
(97, 17, 4, 17),
(98, 5, 4, 18),
(99, 8, 4, 19),
(100, 21, 4, 21),
(101, 18, 4, 22),
(102, 7, 5, 1),
(103, 12, 5, 2),
(104, 9, 5, 3),
(105, 18, 5, 4),
(106, 6, 5, 5),
(107, 17, 5, 6),
(108, 10, 5, 7),
(109, 22, 5, 8),
(110, 4, 5, 9),
(111, 5, 5, 10),
(112, 8, 5, 11),
(113, 16, 5, 12),
(114, 1, 5, 13),
(115, 2, 5, 14),
(116, 19, 5, 15),
(117, 15, 5, 16),
(118, 11, 5, 17),
(119, 21, 5, 18),
(120, 8, 6, 1),
(121, 9, 6, 2),
(122, 21, 6, 3),
(123, 7, 6, 4),
(124, 12, 6, 5),
(125, 10, 6, 6),
(126, 2, 6, 7),
(127, 5, 6, 8),
(128, 18, 6, 9),
(129, 6, 6, 10),
(130, 11, 6, 11),
(131, 4, 6, 12),
(132, 3, 6, 13),
(133, 20, 6, 14),
(134, 13, 6, 15),
(135, 16, 6, 16),
(136, 17, 6, 17),
(137, 1, 6, 18),
(138, 19, 6, 19),
(139, 15, 6, 20),
(140, 14, 6, 21),
(141, 22, 6, 22);

INSERT INTO "public"."races" ("id", "name", "year", "round", "circuit_id", "competition_id") VALUES
(1, '2023 MEXICO CITY E-PRIX', 2023, 1, 1, 1),
(2, '2023 CORE DIRIYAH E-PRIX', 2023, 2, 2, 1),
(3, '2023 CORE DIRIYAH E-PRIX', 2023, 3, 2, 1),
(4, '2023 GREENKO HYDERABAD E-PRIX', 2023, 4, 4, 1),
(5, '2023 CAPE TOWN E-PRIX', 2023, 5, 5, 1),
(6, '2023 JULIUS BAER SÃO PAULO E-PRIX', 2023, 6, 3, 1);

INSERT INTO "public"."rankings" ("id", "rank", "point", "competition_id") VALUES
(1, 1, 25, 1),
(2, 2, 18, 1),
(3, 3, 15, 1),
(4, 4, 12, 1),
(5, 5, 10, 1),
(6, 6, 8, 1),
(7, 7, 6, 1),
(8, 8, 4, 1),
(9, 9, 2, 1),
(10, 10, 1, 1);

INSERT INTO "public"."teams" ("id", "name", "location", "competition_id") VALUES
(2, 'ABT CUPRA FORMULA E TEAM', 'KEMPTEN, GERMANY', 1),
(3, 'ANDRETTI FORMULA E', 'INDIANAPOLIS, USA', 1),
(4, 'DS PENSKE', 'VERSAILLES, FRANCE', 1),
(5, 'ENVISION RACING', 'SILVERSTONE, UK', 1),
(6, 'JAGUAR TCS RACING', 'COVENTRY, UK', 1),
(7, 'MAHINDRA RACING', 'BANBURY, UK', 1),
(8, 'MASERATI MSG RACING', 'MONTE CARLO, MONACO', 1),
(9, 'NEOM MCLAREN FORMULA E TEAM', 'WOKING, UK', 1),
(10, 'NIO 333 RACING', 'SILVERSTONE, UK', 1),
(11, 'NISSAN FORMULA E TEAM', 'LE MANS, FRANCE', 1),
(12, 'TAG HEUER PORSCHE FORMULA E TEAM', 'STUTTGART, GERMANY', 1);

INSERT INTO "public"."users" ("id", "username", "password", "token", "role") VALUES
(1, 'admin', '$2b$10$7Qa4TaIwHhOHIwmlZ5o3mu0jKXModU7K5h0nQ.tWal7FcU5q6pvPG', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTU4MzkzOTMwMzMsInVzZXJuYW1lIjoiYWRtaW4iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTU3NTI5OTN9.D4_DkoASPzzhj-IRsiPccnT0m8E0cTSmDG7_p77UcUE', 'ADMIN');

ALTER TABLE "public"."drivers" ADD FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."drivers_races" ADD FOREIGN KEY ("race_id") REFERENCES "public"."races"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."drivers_races" ADD FOREIGN KEY ("driver_id") REFERENCES "public"."drivers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."races" ADD FOREIGN KEY ("competition_id") REFERENCES "public"."competitions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."rankings" ADD FOREIGN KEY ("competition_id") REFERENCES "public"."competitions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."teams" ADD FOREIGN KEY ("competition_id") REFERENCES "public"."competitions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
