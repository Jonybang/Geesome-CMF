@extends('layouts.admin')

@section('page_name', 'Admin Panel')

@section('content')
    <div ng-app="app" ng-strict-di="">
        <ui-view></ui-view>
    </div>
@endsection

@section('scripts')
        <!-- Morris Charts JavaScript -->
    <script src="/assets/js/plugins/morris/raphael.min.js"></script>
    <script src="/assets/js/plugins/morris/morris.min.js"></script>
    <script src="/assets/js/plugins/morris/morris-data.js"></script>

    <script src="/assets/dist/vendor.js"></script>
    <script src="/assets/dist/app.js"></script>
@endsection