import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface ComponentCanDeactivate {
  hasUnsavedChanges(): boolean | Observable<boolean>;
}

export const unsavedChangesGuard: CanDeactivateFn<ComponentCanDeactivate> = (component: ComponentCanDeactivate) => {
  if (component.hasUnsavedChanges()) {
    return confirm('Você possui alterações não salvas. Deseja realmente apaga-las?');
  }

  return true;
};