import {QVueGlobals, useQuasar} from "quasar";

export default class ThemeService {
  private q: QVueGlobals;
  private isDark: boolean;
  private onChangeIsDarkEventListener : ((isDark: boolean) => void)[] = [];
  constructor(defaultTheme: boolean) {
    this.q = useQuasar();
    this.setTheme(defaultTheme);
    this.onChangeIsDarkEventListener.push((isDark: boolean) => {
        this.q.dark.set(isDark);
    });
  }

  setTheme(isDark: boolean) {
    this.isDark = isDark;
    this.q.dark.set(isDark);
    this.onChangeIsDarkEventListener.forEach(listener => listener(this.isDark));
  }
  getTheme() : boolean {
    return this.isDark;
  }
}
