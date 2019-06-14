# rareraw express server




=============================================
[나중에 정리할 내용들]
1. ORM 서드파티 모듈로 sequelize 녀석을 사용
 $ npm i sequelize-cli -g 
 $ npm i sequelize --save
 $ npm i mysql2 --save
 $ touch .sequelizerc
 $ sequelize init
 $ sequelize model:create --name RECRUITMENT_SITE --attributes "seq:integer, name:string, crwaling_root_urls:string, is_use:tinyint, addtional_urls:string"
 ex) recruitment_site.js 파일에 각 컬럼 속성 재지정 후, 수정사항을 migrations에 있는 사항과 동일시 해줌
 $ sequelize db:migrate
2. DDL
-- MySQL Script generated by MySQL Workbench
-- Fri May  3 19:18:22 2019
-- Model: stats Full    Version: 2.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema stats
-- -----------------------------------------------------
-- DROP SCHEMA IF EXISTS `stats` ;

-- -----------------------------------------------------
-- Schema stats
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `stats` ;
USE `stats` ;

-- -----------------------------------------------------
-- Table `stats`.`RAW_COLLECTION`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stats`.`RAW_COLLECTION` ;

CREATE TABLE IF NOT EXISTS `stats`.`RAW_COLLECTION` (
  `seq` INT NOT NULL AUTO_INCREMENT,
  `years_of_experience` INT NULL,
  `recruitment_site_seq` VARCHAR(25) NULL,
  `company` VARCHAR(50) NULL COMMENT '필수사항, 우대사항 구분',
  `condition_type` ENUM('REQUIRED', 'PREFERRED', 'UNKNOWN') NULL,
  `collection_date` DATE NOT NULL,
  `create_id` VARCHAR(30) NULL,
  `write_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`seq`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stats`.`RAW_WORD`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stats`.`RAW_WORD` ;

CREATE TABLE IF NOT EXISTS `stats`.`RAW_WORD` (
  `seq` INT NOT NULL AUTO_INCREMENT,
  `word` VARCHAR(30) NOT NULL,
  `raw_collection_seq` INT NOT NULL,
  PRIMARY KEY (`seq`),
  INDEX `fk_RAW_WORD_RAW_COLLECTION1_idx` (`raw_collection_seq` ASC),
  CONSTRAINT `fk_RAW_WORD_RAW_COLLECTION1`
    FOREIGN KEY (`raw_collection_seq`)
    REFERENCES `stats`.`RAW_COLLECTION` (`seq`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stats`.`RECRUITMENT_SITE`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stats`.`RECRUITMENT_SITE` ;

CREATE TABLE IF NOT EXISTS `stats`.`RECRUITMENT_SITE` (
  `seq` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `crwaling_root_urls` VARCHAR(2000) NOT NULL,
  `is_use` TINYINT(1) NULL,
  `addtional_urls` VARCHAR(2000) NULL,
  PRIMARY KEY (`seq`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stats`.`KEYWORD_STATISTICS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stats`.`KEYWORD_STATISTICS` ;

CREATE TABLE IF NOT EXISTS `stats`.`KEYWORD_STATISTICS` (
  `seq` INT NOT NULL AUTO_INCREMENT,
  `keyword` VARCHAR(30) NOT NULL,
  `count` INT NOT NULL,
  `collection_date` DATE NOT NULL,
  PRIMARY KEY (`seq`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stats`.`YEARS_OF_EXPERIENCE_STATISTICS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stats`.`YEARS_OF_EXPERIENCE_STATISTICS` ;

CREATE TABLE IF NOT EXISTS `stats`.`YEARS_OF_EXPERIENCE_STATISTICS` (
  `seq` INT NOT NULL AUTO_INCREMENT,
  `keyword` VARCHAR(30) NOT NULL,
  `count` INT NOT NULL,
  `collection_date` DATE NOT NULL,
  `years` INT NULL,
  PRIMARY KEY (`seq`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stats`.`LANGUAGE_STATISTICS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stats`.`LANGUAGE_STATISTICS` ;

CREATE TABLE IF NOT EXISTS `stats`.`LANGUAGE_STATISTICS` (
  `seq` INT NOT NULL AUTO_INCREMENT,
  `keyword` VARCHAR(30) NOT NULL,
  `count` INT NOT NULL,
  `collection_date` DATE NOT NULL,
  PRIMARY KEY (`seq`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stats`.`CONDITION_STATISTICS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stats`.`CONDITION_STATISTICS` ;

CREATE TABLE IF NOT EXISTS `stats`.`CONDITION_STATISTICS` (
  `seq` INT NOT NULL AUTO_INCREMENT,
  `keyword` VARCHAR(30) NOT NULL,
  `count` INT NOT NULL,
  `collection_date` DATE NOT NULL,
  `condition_type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`seq`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stats`.`CONSTANT`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stats`.`CONSTANT` ;

CREATE TABLE IF NOT EXISTS `stats`.`CONSTANT` (
  `seq` INT NOT NULL AUTO_INCREMENT,
  `key` VARCHAR(45) NOT NULL,
  `values` VARCHAR(2000) NOT NULL,
  `desc` VARCHAR(45) NULL,
  `write_date` DATETIME NOT NULL DEFAULT   CURRENT_TIMESTAMP,
  `update_date` DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`seq`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stats`.`RANK_MONTHLY`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stats`.`RANK_MONTHLY` ;

CREATE TABLE IF NOT EXISTS `stats`.`RANK_MONTHLY` (
  `seq` INT NOT NULL AUTO_INCREMENT,
  `rank` INT NOT NULL,
  `base_year_month` VARCHAR(6) NOT NULL,
  `statistics_type` VARCHAR(25) NOT NULL,
  `count` INT NOT NULL,
  `keyword` VARCHAR(30) NOT NULL,
  `count_rate_of_rise` INT NULL,
  `rank_change` INT NULL,
  PRIMARY KEY (`seq`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
