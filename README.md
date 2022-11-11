<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About SPI

SPI is an IPM Cadre System Application that provides features to simplify the management of the cadre system and administratively by using the curriculum method from the IPM cadre implementation guidebook.

The features available are:

- Ability to determine learning methods.
- Ability to determine and manage organization
in cadre.
-  Ability to monitor cadre evaluation in real time.
-  Ability to make a decision.
-  Print activity reports.
-  Manage accounts.


System design documentation can be seen by looking at it -> [Documentation](https://drive.google.com/file/d/1HKFova_CMbcLigppQmAYHgl7BAHIT8iu/view?usp=sharing)

orderly worship, orderly organization, and orderly study.

## SPI installation

## windows

- open cmd, then type command

```
git clone https://github.com/hadiid-studentcode/sipipm.git
npm install
npm run dev
```

```
composer install
php artisan key:generate
php artisan migrate:fresh --seed
php artisan serve

```

