<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Validator;
use \Auth;
use \Session;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;

class AuthController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Registration & Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users, as well as the
    | authentication of existing users. By default, this controller uses
    | a simple trait to add these behaviors. Why don't you explore it?
    |
    */

    use AuthenticatesAndRegistersUsers, ThrottlesLogins;

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware($this->guestMiddleware(), ['except' => 'logout']);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }

    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
            'confirm_password' => 'required',
        ]);

        $data = $request->all();

        if (User::where('email', $data['email'])->first()) {
            Session::flash('message_type', 'error');
            Session::flash('message_text', 'User with same email already registered.');
            return redirect()->intended('/');
        }

        if (User::where('name', $data['name'])->first()) {
            Session::flash('message_type', 'error');
            Session::flash('message_text', 'User with same name already registered.');
            return redirect()->intended('/');
        }

        if($data['password'] != $data['confirm_password']){
            Session::flash('message_type', 'error');
            Session::flash('message_text', 'Password and password confirmation not identical.');
            return redirect('register')->withInput();
        }

        $user = $this->create($data);
        Auth::loginUsingId($user->id);
        return redirect('user/' . $user->name);
    }

    public function authenticate(Request $request)
    {
        $data = $request->all();
        if (Auth::attempt(['email' => $data['email'], 'password' => $data['password']])) {
            Session::flash('message_type', 'success');
            Session::flash('message_text', 'You logged in.');
            return redirect()->intended('/');
        } else {
            Session::flash('message_type', 'warning');
            Session::flash('message_text', 'Incorrect email or password.');
            return redirect('login')->withInput();
        }

    }

    public function logout()
    {
        Auth::logout();
        Session::flush();
        return redirect('/');
    }
}
