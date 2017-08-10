import { Injectable } from "@angular/core"
import { Router, CanActivate} from "@angular/router"
import { ToastService } from "../services/toast.service";
import { AuthHelperService } from "../services/auth-helper.service";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authHelperService: AuthHelperService,
              private router: Router,
              private toastService: ToastService) {
  }

  canActivate() {
    if (this.authHelperService.isLoggedIn() && this.authHelperService.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['.']);
      this.toastService.warningToast("You are not an admin");
      return false;
    }
  }
}
