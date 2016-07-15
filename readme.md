# Lanit Laravel CMF(CMS)

Content managment system based on [laravel framework](https://laravel.com/) with his templates and actions.

Admin panel build with AngularJS, and has the opportunity of drang and drop pages tree, flexible page create/edit and mailing forms.

Designed for developers who want base CMS functions as pages, templates, roles, multilanguage and mailing managment.

## Demo

Client side:  
http://lanit.jonybang.ru/

Admin side:  
http://lanit.jonybang.ru/admin  
User: test.lanit.cms@openmail.cc  
Password: Lt192837

Demo site fully builded with project [database seeds](database/seeds). In this files developer can trace relations of CMF entites.

## Overview

This project largely took the concept from [MODX CMF](https://modx.com/) in admin interface and database scheme.

Due to use [aravel framework in backend - this CMF uses all its advantages and removes all restrictions of custom fraemworks (like MODX).

General entities:  
- [Page](app/Page.php) - page entity for store title, alis(uri), description, content, is_published flag and other general page info. Resources - analog of MODX;
- [Template](app/Template.php) - laravel template with path in [resources/views/templates](resources/views/templates) folder, which the used for render page with his data in {{$page}} variable. Template - analog of MODX;
- [SubField](app/SubField.php) - bind to templates for input and output sub data in pages(as images, sliders data, additional text blocks and etc.). Template Variables(TV) - analog of MODX;
- [ControllerAction](app/ControllerAction.php) - bind to templates for execute some laravel CustomController@myAction when page rendered and get data from it. Snippets - analog of MODX;
- [Setting](app/Setting.php) - some variables for change backend and fronted logic or mode. Also available in templates;
- [Dictionary](app/Dictionary.php) and [DictionaryWord](app/DictionaryWord.php) - certain general phrases, which are not related to any page or other custom entity(as 'Subscribe', 'Copyright' and etc.). Also available in templates.

Sub entites:  
- [UserActionLog](app/UserActionLog.php) - logs about users actions with all entities (create, update, delete);
- [SubscriberGroup](app/SubscriberGroup.php) and [Subscriber](app/Subscriber.php)  - created for оrganization of mailing about news ot other important site events;
- [MailTemplate](app/MailTemplate.php) - templates of sending mails with support of [Blade](https://laravel.com/docs/5.0/templates) syntax(in the main for place variables), stored in database, and editable from admin panel;
- [SendedMail](app/SendedMail.php) - for possibly of resend previosly sended mails.

## Official Documentation

The project is now on beta version, and soon, when the first version - his will be documented.

## Backend and frontend

Now backend core is located in [app/Http/routes.php](https://github.com/Jonybang/Lanit-Laravel-CMF/blob/master/app/Http/routes.php) file.

Forntend core(Admin panel) located in [public/assets/js/admin-app](https://github.com/Jonybang/Lanit-Laravel-CMF/tree/master/public/assets/js/admin-app) folder and used [Awesome edit](https://github.com/Jonybang/awesome-edit) angular module for manage database tables and admin forms. Frontend architecture develop with DRY principle, adheres to the minimalist approach of development and has some specified and bulky code only in create/edit controllers and directives of complex forms(like [page-form-controller.js](public/assets/js/admin-app/modules/page-form/page-form-controller.js) and [mailing-controller.js](public/assets/js/admin-app/modules/site-manage/mailing/mailing-controller.js))

Frontend and backend separated by REST API, and if desired developer can build his frontend for use created backend.

## TODO:

- Role and Multilanguage system;
- Moved to laravel package(for example [Riari/laravel-forum](https://github.com/Riari/laravel-forum)).
