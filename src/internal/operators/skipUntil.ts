import { operator } from 'rxjs/internal/util/operator';
import { Observable } from '../Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { fromSource } from 'rxjs/internal/create/from';
import { FOType, ObservableInput, Operation, Sink, SinkArg } from 'rxjs/internal/types';

export function skipUntil<T>(notifier: ObservableInput<any>): Operation<T, T> {
  return operator((source: Observable<T>, type: FOType, dest: Sink<T>, subs: Subscription) => {
    let notified = false;
    const notifierSubs = new Subscription();
    subs.add(notifierSubs);

    fromSource(notifier)(FOType.SUBSCRIBE, (t: FOType, v: SinkArg<any>, notiferSubs: Subscription) => {
      switch (t) {
        case FOType.ERROR:
          dest(t, v, subs);
          subs.unsubscribe();
          break;
        case FOType.NEXT:
          notified = true;
        case FOType.COMPLETE:
          notifierSubs.unsubscribe();
        default:
          break;
      }
    }, notifierSubs);

    source(FOType.SUBSCRIBE, (t: FOType, v: SinkArg<T>, subs: Subscription) => {
      if (notified || t !== FOType.NEXT) {
        dest(t, v, subs);
      }
    }, subs);
  });
}