# Lanit Laravel CMF(CMS)

Content managment system based on laravel framework with his templates and actions.

Designed for developers who want base CMS functions as pages, templates, roles, multilanguage and mailing managment.

## Demo

Client side:  
http://lanit.jonybang.ru/

Admin side:  
http://lanit.jonybang.ru/admin  
User: test.lanit.cms@openmail.cc
Password: Lt192837

## Overview

This project largely took the concept from [MODX CMF](https://modx.com/) in admin interface and database scheme.

Due to use laravel framework in backend - this CMF uses all its advantages and removes all restrictions of custom fraemworks (like MODX).

General entities:  
- Page - page entity for store title, alis(uri), description, content, is_published flag and other general page info;
- Template - laravel template with path in resources/views/templates folder, which the used for render page with his data in {{$page}} variable;
- SubField - bind to templates for input and output sub data in pages(as images, sliders data, additional text blocks and etc.). Template Variables(TV) - analog of MODX;
- ControllerAction - bind to templates for execute some laravel CustomController@myAction when page rendered and get data from it. Sinppets - analog of MODX;
- Setting - some variables for change backend and fronted logic or mode;
- Dictionary and DictionaryWord - certain general phrases, which are not related to any page or other custom entity(as 'Subscribe', 'Copyright' and etc.).

Sub entites:  
- SubscriberGroup and Subscriber - created for оrganization of mailing about news ot other important site events;
- MailTemplate - templates of sending mails with support of [Blade](https://laravel.com/docs/5.0/templates) syntax(in the main for place variables), stored in database, and editable from admin panel;
- SendedMail - for possibly of resend previosly sended mails.

## Official Documentation

The project is now on beta version, and soon, when the first version - his will be documented.

## Backend and frontend

Now backend core is located in [app/Http/routes.php](https://github.com/Jonybang/Lanit-Laravel-CMF/blob/master/app/Http/routes.php) file.

Forntend core(Admin panel) located in [public/assets/js/admin-app](https://github.com/Jonybang/Lanit-Laravel-CMF/tree/master/public/assets/js/admin-app) folder and used [Awesome edit](https://github.com/Jonybang/awesome-edit) angular module for manage database tables and admin forms.

Frontend and backend separated by REST API, and if desired developer can build his frontend for use created backend.

## TODO:

Role and Multilanguage system.
