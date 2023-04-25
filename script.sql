CREATE DATABASE IF NOT EXISTS slido_db;
USE slido_db;
CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `questions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `question` VARCHAR(255) DEFAULT NULL,
  `user_id` INT DEFAULT NULL,
  CONSTRAINT `idx_fk_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  PRIMARY KEY (`id`)
);

USE slido_db;
INSERT INTO `users` (`name`) VALUES
  ('Homer Simpsons'),
  ('Philip J. Fry');

INSERT INTO `questions` (`question`, `user_id`) VALUES
  ('Quem mudou o canal?', 1),
  ('Cade a Leela?', 2),
  ('Cade o Bender?', 1);
