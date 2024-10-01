import { makeAutoObservable } from "mobx";
import { User } from "src/shared/types/user";
import { signInRequest } from "src/shared/api/user/sign-in-request";
import { isAxiosError } from "axios";
import { SignIn, SignUp } from "src/store/types/user";
import { checkRequest } from "src/shared/api/user/check-request";
import { signUpRequest } from "src/shared/api/user/sign-up-request";

export class UserStore {
  _isAuth: boolean;
  _user: User | null;
  constructor() {
    this._isAuth = false;
    this._user = null;
    makeAutoObservable(this);
  }

  setIsAuth(value: boolean) {
    this._isAuth = value;
  }

  setUser(user: User | null) {
    this._user = user;
  }

  async signUp({ email, password }: SignUp) {
    try {
      const response = await signUpRequest(email, password);
      const user: User = {
        id: response.id,
        email: response.email,
        role: response.role,
      };

      this.setUser(user);
      this.setIsAuth(true);
    } catch (e) {
      if (isAxiosError(e)) {
        const message = e.response?.data.message;
        alert(message);
      }
    }
  }

  async check() {
    try {
      const response = await checkRequest();
      const user: User = {
        id: response.id,
        email: response.email,
        role: response.role,
      };

      this.setUser(user);
      this.setIsAuth(true);
    } catch (e) {
      if (isAxiosError(e)) {
        const message = e.response?.data.message;
        alert(message);
      }
    }
  }
  async signIn({ email, password }: SignIn) {
    try {
      const response = await signInRequest(email, password);
      const user: User = {
        id: response.id,
        email: response.email,
        role: response.role,
      };

      this.setUser(user);
      this.setIsAuth(true);
    } catch (e) {
      if (isAxiosError(e)) {
        const message = e.response?.data.message;
        alert(message);
      }
    }
  }

  logOut(cb?: () => void) {
    this.setUser(null);
    this.setIsAuth(false);
    localStorage.removeItem("token");
    cb?.();
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}
