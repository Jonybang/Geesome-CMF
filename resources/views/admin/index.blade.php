@extends('layouts.admin')

@section('page_name', 'Admin Panel')

@section('content')
    <div ng-app="admin_app" ng-strict-di="">
        <ui-view></ui-view>
    </div>
@endsection

@section('scripts')
    <script src="/assets/js/lodash.min.js"></script>
    <script src="/assets/js/moment.min.js"></script>
    <script src="/assets/js/moment-ru.js"></script>
    {{--<script src="//cdn.ckeditor.com/4.5.10/basic/ckeditor.js"></script>--}}
    {{--<script src="//cdn.ckeditor.com/4.5.10/standard/ckeditor.js"></script>--}}

    <script src="//cdn.ckeditor.com/4.5.10/full/ckeditor.js"></script>

    <script src="/assets/dist/vendor.js"></script>
    <script src="/assets/dist/app.js"></script>
@endsection