--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public.users DROP CONSTRAINT IF EXISTS users_fk1;
ALTER TABLE IF EXISTS ONLY public.users DROP CONSTRAINT IF EXISTS users_fk0;
ALTER TABLE IF EXISTS ONLY public.messages DROP CONSTRAINT IF EXISTS messages_fk1;
ALTER TABLE IF EXISTS ONLY public.messages DROP CONSTRAINT IF EXISTS messages_fk0;
ALTER TABLE IF EXISTS ONLY public."frenRequests" DROP CONSTRAINT IF EXISTS "frenRequests_fk1";
ALTER TABLE IF EXISTS ONLY public."frenRequests" DROP CONSTRAINT IF EXISTS "frenRequests_fk0";
ALTER TABLE IF EXISTS ONLY public.users DROP CONSTRAINT IF EXISTS users_pk;
ALTER TABLE IF EXISTS ONLY public.messages DROP CONSTRAINT IF EXISTS messages_pk;
ALTER TABLE IF EXISTS ONLY public.genders DROP CONSTRAINT IF EXISTS genders_pk;
ALTER TABLE IF EXISTS ONLY public."frenlinessLevels" DROP CONSTRAINT IF EXISTS "frenlinessLevels_pk";
ALTER TABLE IF EXISTS ONLY public."frenRequests" DROP CONSTRAINT IF EXISTS "frenRequests_pk";
ALTER TABLE IF EXISTS public.users ALTER COLUMN "userId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.messages ALTER COLUMN "messageId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.genders ALTER COLUMN "genderId" DROP DEFAULT;
ALTER TABLE IF EXISTS public."frenlinessLevels" ALTER COLUMN "levelId" DROP DEFAULT;
ALTER TABLE IF EXISTS public."frenRequests" ALTER COLUMN "requestId" DROP DEFAULT;
DROP SEQUENCE IF EXISTS public."users_userId_seq";
DROP TABLE IF EXISTS public.users;
DROP SEQUENCE IF EXISTS public."messages_messageId_seq";
DROP TABLE IF EXISTS public.messages;
DROP SEQUENCE IF EXISTS public."genders_genderId_seq";
DROP TABLE IF EXISTS public.genders;
DROP SEQUENCE IF EXISTS public."frenlinessLevels_levelId_seq";
DROP TABLE IF EXISTS public."frenlinessLevels";
DROP SEQUENCE IF EXISTS public."frenRequests_requestId_seq";
DROP TABLE IF EXISTS public."frenRequests";
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: frenRequests; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."frenRequests" (
    "requestId" integer NOT NULL,
    "senderId" integer NOT NULL,
    "recipientId" integer NOT NULL,
    "isAccepted" boolean NOT NULL
);


--
-- Name: frenRequests_requestId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."frenRequests_requestId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: frenRequests_requestId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."frenRequests_requestId_seq" OWNED BY public."frenRequests"."requestId";


--
-- Name: frenlinessLevels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."frenlinessLevels" (
    "levelId" integer NOT NULL,
    level text NOT NULL
);


--
-- Name: frenlinessLevels_levelId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."frenlinessLevels_levelId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: frenlinessLevels_levelId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."frenlinessLevels_levelId_seq" OWNED BY public."frenlinessLevels"."levelId";


--
-- Name: genders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.genders (
    "genderId" integer NOT NULL,
    identity text NOT NULL
);


--
-- Name: genders_genderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."genders_genderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: genders_genderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."genders_genderId_seq" OWNED BY public.genders."genderId";


--
-- Name: messages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.messages (
    "messageId" integer NOT NULL,
    "messageContent" text NOT NULL,
    "senderId" integer NOT NULL,
    "recipientId" integer NOT NULL,
    "sentAt" timestamp with time zone NOT NULL
);


--
-- Name: messages_messageId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."messages_messageId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: messages_messageId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."messages_messageId_seq" OWNED BY public.messages."messageId";


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    "userId" integer NOT NULL,
    "dogName" text NOT NULL,
    location text NOT NULL,
    "userName" text NOT NULL,
    breed text NOT NULL,
    "DOB" date NOT NULL,
    "levelId" integer NOT NULL,
    tagline text NOT NULL,
    "imageUrl" text NOT NULL,
    "genderId" integer NOT NULL
);


--
-- Name: users_userId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."users_userId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_userId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."users_userId_seq" OWNED BY public.users."userId";


--
-- Name: frenRequests requestId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."frenRequests" ALTER COLUMN "requestId" SET DEFAULT nextval('public."frenRequests_requestId_seq"'::regclass);


--
-- Name: frenlinessLevels levelId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."frenlinessLevels" ALTER COLUMN "levelId" SET DEFAULT nextval('public."frenlinessLevels_levelId_seq"'::regclass);


--
-- Name: genders genderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genders ALTER COLUMN "genderId" SET DEFAULT nextval('public."genders_genderId_seq"'::regclass);


--
-- Name: messages messageId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.messages ALTER COLUMN "messageId" SET DEFAULT nextval('public."messages_messageId_seq"'::regclass);


--
-- Name: users userId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN "userId" SET DEFAULT nextval('public."users_userId_seq"'::regclass);


--
-- Data for Name: frenRequests; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."frenRequests" ("requestId", "senderId", "recipientId", "isAccepted") FROM stdin;
16	9	8	f
15	10	9	t
18	8	7	f
25	10	6	t
26	8	6	f
27	7	6	f
\.


--
-- Data for Name: frenlinessLevels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."frenlinessLevels" ("levelId", level) FROM stdin;
1	Petential
2	Looking Quite Fetching
3	Pawsitively Pawsome 
4	One Classy Mother Pupper
\.


--
-- Data for Name: genders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.genders ("genderId", identity) FROM stdin;
1	male
2	female
\.


--
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.messages ("messageId", "messageContent", "senderId", "recipientId", "sentAt") FROM stdin;
8	bork bork!	9	6	2020-10-13 17:52:13.79-07
9	bork bork~!	8	7	2020-10-13 17:54:04.371-07
10	hiiii	8	6	2020-10-13 17:54:35.297-07
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users ("userId", "dogName", location, "userName", breed, "DOB", "levelId", tagline, "imageUrl", "genderId") FROM stdin;
8	Mimi	Los Angeles, CA	floofyMimi	Pomeranian	2018-05-10	4	Cutest litto floof in town	/images/userId8.jpg	2
7	Pupperino	Los Angeles, CA	pupps54	cyberBorks	1979-01-15	4	machines rule	/images/userId7.jpg	1
9	Heckin	Los Angeles, CA	givinMeDaHeck	Shiba	2015-10-03	4	Bork bork bork	/images/userId9.jpg	1
11	Ponyo	Los Angeles, CA	ponyoPuppers	Chiweenie	2015-10-03	3	Chaaaaaaweeenie!	/images/userId11.jpg	1
6	Kaydo	Los Angeles, CA	kaydoborkz	Husky	2015-10-20	3	Bork bork bork	/images/userId6.jpg	1
10	Sir Doggyton	Pasadena, CA	sirDoggytonDaThird	German Shepard	2015-10-03	3	Bork bork bork	/images/userId10.jpg	1
\.


--
-- Name: frenRequests_requestId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."frenRequests_requestId_seq"', 27, true);


--
-- Name: frenlinessLevels_levelId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."frenlinessLevels_levelId_seq"', 4, true);


--
-- Name: genders_genderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."genders_genderId_seq"', 2, true);


--
-- Name: messages_messageId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."messages_messageId_seq"', 12, true);


--
-- Name: users_userId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."users_userId_seq"', 11, true);


--
-- Name: frenRequests frenRequests_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."frenRequests"
    ADD CONSTRAINT "frenRequests_pk" PRIMARY KEY ("requestId");


--
-- Name: frenlinessLevels frenlinessLevels_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."frenlinessLevels"
    ADD CONSTRAINT "frenlinessLevels_pk" PRIMARY KEY ("levelId");


--
-- Name: genders genders_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genders
    ADD CONSTRAINT genders_pk PRIMARY KEY ("genderId");


--
-- Name: messages messages_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pk PRIMARY KEY ("messageId");


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY ("userId");


--
-- Name: frenRequests frenRequests_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."frenRequests"
    ADD CONSTRAINT "frenRequests_fk0" FOREIGN KEY ("senderId") REFERENCES public.users("userId");


--
-- Name: frenRequests frenRequests_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."frenRequests"
    ADD CONSTRAINT "frenRequests_fk1" FOREIGN KEY ("recipientId") REFERENCES public.users("userId");


--
-- Name: messages messages_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_fk0 FOREIGN KEY ("senderId") REFERENCES public.users("userId");


--
-- Name: messages messages_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_fk1 FOREIGN KEY ("recipientId") REFERENCES public.users("userId");


--
-- Name: users users_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_fk0 FOREIGN KEY ("levelId") REFERENCES public."frenlinessLevels"("levelId");


--
-- Name: users users_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_fk1 FOREIGN KEY ("genderId") REFERENCES public.genders("genderId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

