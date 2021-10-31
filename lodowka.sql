-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 31 Paź 2021, 22:31
-- Wersja serwera: 10.4.14-MariaDB
-- Wersja PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `lodowka`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `lodowki`
--

CREATE TABLE `lodowki` (
  `ID` int(11) NOT NULL,
  `Nazwa` varchar(35) COLLATE utf8mb4_polish_ci NOT NULL,
  `Data` text COLLATE utf8mb4_polish_ci NOT NULL,
  `StickyNotesTab` text COLLATE utf8mb4_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `lodowki`
--

INSERT INTO `lodowki` (`ID`, `Nazwa`, `Data`, `StickyNotesTab`) VALUES
(28, 'testing', '{\"stickyNotes\":[{\"id\":3,\"parentFunctions\":{},\"size\":{\"x\":441,\"y\":311},\"position\":{\"x\":405,\"y\":126},\"text\":\"<p>Hel<em>lo there!<\\/em>d<\\/p>\",\"zIndex\":41},{\"id\":9,\"parentFunctions\":{},\"size\":{\"x\":160,\"y\":160},\"position\":{\"x\":939,\"y\":316},\"text\":\"Hello there!\",\"zIndex\":39}],\"functions4Notes\":{},\"name\":\"testing\",\"totalNotes\":4,\"currentNotes\":2,\"topIndex\":41}', '[{\"id\":3,\"parentFunctions\":{},\"size\":{\"x\":441,\"y\":311},\"position\":{\"x\":405,\"y\":126},\"text\":\"<p>Hel<em>lo there!<\\/em>d<\\/p>\",\"zIndex\":41},{\"id\":9,\"parentFunctions\":{},\"size\":{\"x\":160,\"y\":160},\"position\":{\"x\":939,\"y\":316},\"text\":\"Hello there!\",\"zIndex\":39}]'),
(29, 'ŻÓŁW', '{\"stickyNotes\":[{\"id\":1,\"parentFunctions\":{},\"size\":{\"x\":160,\"y\":160},\"position\":{\"x\":409,\"y\":94},\"text\":\"Hello there!\",\"zIndex\":28},{\"id\":5,\"parentFunctions\":{},\"size\":{\"x\":160,\"y\":160},\"position\":{\"x\":608,\"y\":236},\"text\":\"<p>prawa przednia<\\/p>\",\"zIndex\":26},{\"id\":7,\"parentFunctions\":{},\"size\":{\"x\":160,\"y\":160},\"position\":{\"x\":593,\"y\":477},\"text\":\"<p>prawa tylnia<\\/p>\",\"zIndex\":23},{\"id\":9,\"parentFunctions\":{},\"size\":{\"x\":160,\"y\":160},\"position\":{\"x\":248,\"y\":471},\"text\":\"Hello there!\",\"zIndex\":19},{\"id\":11,\"parentFunctions\":{},\"size\":{\"x\":287,\"y\":322},\"position\":{\"x\":351,\"y\":221},\"text\":\"<p style=\\\"text-align: center;\\\"><strong>Skorupa<\\/strong><\\/p>\",\"zIndex\":31}],\"functions4Notes\":{},\"name\":\"\\u017b\\u00d3\\u0141W\",\"totalNotes\":6,\"currentNotes\":5,\"topIndex\":31}', '[{\"id\":1,\"parentFunctions\":{},\"size\":{\"x\":160,\"y\":160},\"position\":{\"x\":409,\"y\":94},\"text\":\"Hello there!\",\"zIndex\":28},{\"id\":5,\"parentFunctions\":{},\"size\":{\"x\":160,\"y\":160},\"position\":{\"x\":608,\"y\":236},\"text\":\"<p>prawa przednia<\\/p>\",\"zIndex\":26},{\"id\":7,\"parentFunctions\":{},\"size\":{\"x\":160,\"y\":160},\"position\":{\"x\":593,\"y\":477},\"text\":\"<p>prawa tylnia<\\/p>\",\"zIndex\":23},{\"id\":9,\"parentFunctions\":{},\"size\":{\"x\":160,\"y\":160},\"position\":{\"x\":248,\"y\":471},\"text\":\"Hello there!\",\"zIndex\":19},{\"id\":11,\"parentFunctions\":{},\"size\":{\"x\":287,\"y\":322},\"position\":{\"x\":351,\"y\":221},\"text\":\"<p style=\\\"text-align: center;\\\"><strong>Skorupa<\\/strong><\\/p>\",\"zIndex\":31}]');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `lodowki`
--
ALTER TABLE `lodowki`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Nazwa` (`Nazwa`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `lodowki`
--
ALTER TABLE `lodowki`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
