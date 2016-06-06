@extends('layouts.admin')

@section('page_name', 'Admin Panel')

@section('content')
    <div ng-app="app" ng-strict-di="">
        <ui-view></ui-view>
    </div>
@endsection

@section('scripts')
    <script src="/assets/js/lodash.min.js"></script>
    <script src="/assets/js/moment.min.js"></script>
    <script src="/assets/js/moment-ru.js"></script>

    <script src="/assets/dist/vendor.js"></script>
    <script src="/assets/dist/app.js"></script>
@endsection