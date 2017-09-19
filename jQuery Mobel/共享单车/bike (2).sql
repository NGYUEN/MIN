/*
Navicat MySQL Data Transfer

Source Server         : cc
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : bike

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2017-06-02 21:20:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_authentication`
-- ----------------------------
DROP TABLE IF EXISTS `t_authentication`;
CREATE TABLE `t_authentication` (
  `a_id` int(11) NOT NULL AUTO_INCREMENT,
  `a_name` varchar(255) DEFAULT NULL,
  `a_number` varchar(255) DEFAULT NULL,
  `a_photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`a_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_authentication
-- ----------------------------

-- ----------------------------
-- Table structure for `t_bikes`
-- ----------------------------
DROP TABLE IF EXISTS `t_bikes`;
CREATE TABLE `t_bikes` (
  `b_id` int(11) NOT NULL AUTO_INCREMENT,
  `b_time` varchar(255) DEFAULT NULL,
  `used` varchar(255) DEFAULT NULL,
  `b_classify` int(11) DEFAULT NULL,
  PRIMARY KEY (`b_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_bikes
-- ----------------------------

-- ----------------------------
-- Table structure for `t_comment`
-- ----------------------------
DROP TABLE IF EXISTS `t_comment`;
CREATE TABLE `t_comment` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_content` varchar(255) DEFAULT NULL,
  `c_time` varchar(255) DEFAULT NULL,
  `s_id` int(11) DEFAULT NULL,
  `u_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_comment
-- ----------------------------

-- ----------------------------
-- Table structure for `t_credit`
-- ----------------------------
DROP TABLE IF EXISTS `t_credit`;
CREATE TABLE `t_credit` (
  `k_id` int(11) NOT NULL AUTO_INCREMENT,
  `k_time` varchar(255) DEFAULT NULL,
  `k_content` varchar(255) DEFAULT NULL,
  `k_points` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`k_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_credit
-- ----------------------------

-- ----------------------------
-- Table structure for `t_priase`
-- ----------------------------
DROP TABLE IF EXISTS `t_priase`;
CREATE TABLE `t_priase` (
  `p_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` int(11) DEFAULT NULL,
  `p_time` varchar(255) DEFAULT NULL,
  `s_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_priase
-- ----------------------------

-- ----------------------------
-- Table structure for `t_recharge`
-- ----------------------------
DROP TABLE IF EXISTS `t_recharge`;
CREATE TABLE `t_recharge` (
  `r_id` int(11) NOT NULL AUTO_INCREMENT,
  `r_money` varchar(255) DEFAULT NULL,
  `r_time` varchar(255) DEFAULT NULL,
  `r_success` varchar(255) DEFAULT NULL,
  `r_way` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`r_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_recharge
-- ----------------------------

-- ----------------------------
-- Table structure for `t_space`
-- ----------------------------
DROP TABLE IF EXISTS `t_space`;
CREATE TABLE `t_space` (
  `s_id` int(11) NOT NULL AUTO_INCREMENT,
  `s_name` varchar(255) DEFAULT NULL,
  `s_content` varchar(255) DEFAULT NULL,
  `s_time` varchar(255) DEFAULT NULL,
  `u_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`s_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_space
-- ----------------------------

-- ----------------------------
-- Table structure for `t_sports`
-- ----------------------------
DROP TABLE IF EXISTS `t_sports`;
CREATE TABLE `t_sports` (
  `y_id` int(11) NOT NULL AUTO_INCREMENT,
  `y_time` varchar(255) DEFAULT NULL,
  `y_distance` varchar(255) DEFAULT NULL,
  `y_calorie` varchar(255) DEFAULT NULL,
  `y_save` varchar(255) DEFAULT NULL,
  `t_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`y_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_sports
-- ----------------------------

-- ----------------------------
-- Table structure for `t_transaction`
-- ----------------------------
DROP TABLE IF EXISTS `t_transaction`;
CREATE TABLE `t_transaction` (
  `t_id` int(11) NOT NULL AUTO_INCREMENT,
  `t_k_time` varchar(255) DEFAULT NULL,
  `t_j_time` varchar(255) DEFAULT NULL,
  `t_money` varchar(255) DEFAULT NULL,
  `t_ways` varchar(255) DEFAULT NULL,
  `u_id` int(11) DEFAULT NULL,
  `b_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`t_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_transaction
-- ----------------------------

-- ----------------------------
-- Table structure for `t_user`
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) DEFAULT NULL,
  `u_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `admin` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `money` varchar(255) DEFAULT NULL,
  `points` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------

-- ----------------------------
-- Table structure for `t_wallet`
-- ----------------------------
DROP TABLE IF EXISTS `t_wallet`;
CREATE TABLE `t_wallet` (
  `u_id` int(11) NOT NULL DEFAULT '0',
  `money` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_wallet
-- ----------------------------
