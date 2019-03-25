import { FOType, SchedulerLike, Sink } from 'rxjs/internal/types';
import { Observable } from 'rxjs/internal/Observable';
import { sourceAsObservable } from 'rxjs/internal/util/sourceAsObservable';
import { Subscription } from 'rxjs/internal/Subscription';
import { AsyncSubject } from 'rxjs/internal/AsyncSubject';
// TODO: canReportError
// import { canReportError } from 'rxjs/internal/util/canReportError';

// tslint:disable:max-line-length
export function bindCallback<R1, R2, R3, R4>(callbackFunc: (callback: (res1: R1, res2: R2, res3: R3, res4: R4, ...args: any[]) => any) => any, scheduler?: SchedulerLike): () => Observable<any[]>;
export function bindCallback<R1, R2, R3>(callbackFunc: (callback: (res1: R1, res2: R2, res3: R3) => any) => any, scheduler?: SchedulerLike): () => Observable<[R1, R2, R3]>;
export function bindCallback<R1, R2>(callbackFunc: (callback: (res1: R1, res2: R2) => any) => any, scheduler?: SchedulerLike): () => Observable<[R1, R2]>;
export function bindCallback<R1>(callbackFunc: (callback: (res1: R1) => any) => any, scheduler?: SchedulerLike): () => Observable<R1>;
export function bindCallback(callbackFunc: (callback: () => any) => any, scheduler?: SchedulerLike): () => Observable<void>;

export function bindCallback<A1, R1, R2, R3, R4>(callbackFunc: (arg1: A1, callback: (res1: R1, res2: R2, res3: R3, res4: R4, ...args: any[]) => any) => any, scheduler?: SchedulerLike): (arg1: A1) => Observable<any[]>;
export function bindCallback<A1, R1, R2, R3>(callbackFunc: (arg1: A1, callback: (res1: R1, res2: R2, res3: R3) => any) => any, scheduler?: SchedulerLike): (arg1: A1) => Observable<[R1, R2, R3]>;
export function bindCallback<A1, R1, R2>(callbackFunc: (arg1: A1, callback: (res1: R1, res2: R2) => any) => any, scheduler?: SchedulerLike): (arg1: A1) => Observable<[R1, R2]>;
export function bindCallback<A1, R1>(callbackFunc: (arg1: A1, callback: (res1: R1) => any) => any, scheduler?: SchedulerLike): (arg1: A1) => Observable<R1>;
export function bindCallback<A1>(callbackFunc: (arg1: A1, callback: () => any) => any, scheduler?: SchedulerLike): (arg1: A1) => Observable<void>;

export function bindCallback<A1, A2, R1, R2, R3, R4>(callbackFunc: (arg1: A1, arg2: A2, callback: (res1: R1, res2: R2, res3: R3, res4: R4, ...args: any[]) => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2) => Observable<any[]>;
export function bindCallback<A1, A2, R1, R2, R3>(callbackFunc: (arg1: A1, arg2: A2, callback: (res1: R1, res2: R2, res3: R3) => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2) => Observable<[R1, R2, R3]>;
export function bindCallback<A1, A2, R1, R2>(callbackFunc: (arg1: A1, arg2: A2, callback: (res1: R1, res2: R2) => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2) => Observable<[R1, R2]>;
export function bindCallback<A1, A2, R1>(callbackFunc: (arg1: A1, arg2: A2, callback: (res1: R1) => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2) => Observable<R1>;
export function bindCallback<A1, A2>(callbackFunc: (arg1: A1, arg2: A2, callback: () => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2) => Observable<void>;

export function bindCallback<A1, A2, A3, R1, R2, R3, R4>(callbackFunc: (arg1: A1, arg2: A2, arg3: A3, callback: (res1: R1, res2: R2, res3: R3, res4: R4, ...args: any[]) => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2, arg3: A3) => Observable<any[]>;
export function bindCallback<A1, A2, A3, R1, R2, R3>(callbackFunc: (arg1: A1, arg2: A2, arg3: A3, callback: (res1: R1, res2: R2, res3: R3) => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2, arg3: A3) => Observable<[R1, R2, R3]>;
export function bindCallback<A1, A2, A3, R1, R2>(callbackFunc: (arg1: A1, arg2: A2, arg3: A3, callback: (res1: R1, res2: R2) => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2, arg3: A3) => Observable<[R1, R2]>;
export function bindCallback<A1, A2, A3, R1>(callbackFunc: (arg1: A1, arg2: A2, arg3: A3, callback: (res1: R1) => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2, arg3: A3) => Observable<R1>;
export function bindCallback<A1, A2, A3>(callbackFunc: (arg1: A1, arg2: A2, arg3: A3, callback: () => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2, arg3: A3) => Observable<void>;

export function bindCallback<A1, A2, A3, A4, R1, R2, R3, R4>(callbackFunc: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: (res1: R1, res2: R2, res3: R3, res4: R4, ...args: any[]) => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Observable<any[]>;
export function bindCallback<A1, A2, A3, A4, R1, R2, R3>(callbackFunc: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: (res1: R1, res2: R2, res3: R3) => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Observable<[R1, R2, R3]>;
export function bindCallback<A1, A2, A3, A4, R1, R2>(callbackFunc: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: (res1: R1, res2: R2) => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Observable<[R1, R2]>;
export function bindCallback<A1, A2, A3, A4, R1>(callbackFunc: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: (res1: R1) => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Observable<R1>;
export function bindCallback<A1, A2, A3, A4>(callbackFunc: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: () => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Observable<void>;

export function bindCallback<A1, A2, A3, A4, A5, R1, R2, R3, R4>(callbackFunc: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: (res1: R1, res2: R2, res3: R3, res4: R4, ...args: any[]) => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Observable<any[]>;
export function bindCallback<A1, A2, A3, A4, A5, R1, R2, R3>(callbackFunc: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: (res1: R1, res2: R2, res3: R3) => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Observable<[R1, R2, R3]>;
export function bindCallback<A1, A2, A3, A4, A5, R1, R2>(callbackFunc: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: (res1: R1, res2: R2) => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Observable<[R1, R2]>;
export function bindCallback<A1, A2, A3, A4, A5, R1>(callbackFunc: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: (res1: R1) => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Observable<R1>;
export function bindCallback<A1, A2, A3, A4, A5>(callbackFunc: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: () => any) => any, scheduler?: SchedulerLike): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Observable<void>;

export function bindCallback<A, R>(callbackFunc: (...args: Array<A | ((result: R) => any)>) => any, scheduler?: SchedulerLike): (...args: A[]) => Observable<R>;
export function bindCallback<A, R>(callbackFunc: (...args: Array<A | ((...results: R[]) => any)>) => any, scheduler?: SchedulerLike): (...args: A[]) => Observable<R[]>;

export function bindCallback(callbackFunc: Function, scheduler?: SchedulerLike): (...args: any[]) => Observable<any>;

// tslint:enable:max-line-length

/**
 * Converts a callback API to a function that returns an Observable.
 *
 * <span class="informal">Give it a function `f` of type `f(x, callback)` and
 * it will return a function `g` that when called as `g(x)` will output an
 * Observable.</span>
 *
 * `bindCallback` is not an operator because its input and output are not
 * Observables. The input is a function `func` with some parameters. The
 * last parameter must be a callback function that `func` calls when it is
 * done.
 *
 * The output of `bindCallback` is a function that takes the same parameters
 * as `func`, except the last one (the callback). When the output function
 * is called with arguments it will return an Observable. If function `func`
 * calls its callback with one argument, the Observable will emit that value.
 * If on the other hand the callback is called with multiple values the resulting
 * Observable will emit an array with said values as arguments.
 *
 * It is **very important** to remember that input function `func` is not called
 * when the output function is, but rather when the Observable returned by the output
 * function is subscribed. This means if `func` makes an AJAX request, that request
 * will be made every time someone subscribes to the resulting Observable, but not before.
 *
 * The last optional parameter - `scheduler` - can be used to control when the call
 * to `func` happens after someone subscribes to Observable, as well as when results
 * passed to callback will be emitted. By default, the subscription to an Observable calls `func`
 * synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`,
 * just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler
 * and call `subscribe` on the output Observable, all function calls that are currently executing
 * will end before `func` is invoked.
 *
 * By default, results passed to the callback are emitted immediately after `func` invokes the callback.
 * In particular, if the callback is called synchronously, then the subscription of the resulting Observable
 * will call the `next` function synchronously as well.  If you want to defer that call,
 * you may use {@link asyncScheduler} just as before.  This means that by using `Scheduler.async` you can
 * ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.
 *
 * Note that the Observable created by the output function will always emit a single value
 * and then complete immediately. If `func` calls the callback multiple times, values from subsequent
 * calls will not appear in the stream. If you need to listen for multiple calls,
 *  you probably want to use {@link fromEvent} or {@link fromEventPattern} instead.
 *
 * If `func` depends on some context (`this` property) and is not already bound, the context of `func`
 * will be the context that the output function has at call time. In particular, if `func`
 * is called as a method of some objec and if `func` is not already bound, in order to preserve the context
 * it is recommended that the context of the output function is set to that object as well.
 *
 * If the input function calls its callback in the "node style" (i.e. first argument to callback is
 * optional error parameter signaling whether the call failed or not), {@link bindNodeCallback}
 * provides convenient error handling and probably is a better choice.
 * `bindCallback` will treat such functions the same as any other and error parameters
 * (whether passed or not) will always be interpreted as regular callback argument.
 *
 * ## Examples
 *
 * ### Convert jQuery's getJSON to an Observable API
 * ```javascript
 * // Suppose we have jQuery.getJSON('/my/url', callback)
 * const getJSONAsObservable = bindCallback(jQuery.getJSON);
 * const result = getJSONAsObservable('/my/url');
 * result.subscribe(x => console.log(x), e => console.error(e));
 * ```
 *
 * ### Receive an array of arguments passed to a callback
 * ```javascript
 * someFunction((a, b, c) => {
 *   console.log(a); // 5
 *   console.log(b); // 'some string'
 *   console.log(c); // {someProperty: 'someValue'}
 * });
 *
 * const boundSomeFunction = bindCallback(someFunction);
 * boundSomeFunction().subscribe(values => {
 *   console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
 * });
 * ```
 *
 * ### Compare behaviour with and without async Scheduler
 * ```javascript
 * function iCallMyCallbackSynchronously(cb) {
 *   cb();
 * }
 *
 * const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
 * const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);
 *
 * boundSyncFn().subscribe(() => console.log('I was sync!'));
 * boundAsyncFn().subscribe(() => console.log('I was async!'));
 * console.log('This happened...');
 *
 * // Logs:
 * // I was sync!
 * // This happened...
 * // I was async!
 * ```
 *
 * ### Use bindCallback on an object method
 * ```javascript
 * const boundMethod = bindCallback(someObject.methodWithCallback);
 * boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
 * .subscribe(subscriber);
 * ```
 *
 * @see {@link bindNodeCallback}
 * @see {@link from}
 *
 * @param {function} func A function with a callback as the last parameter.
 * @param {SchedulerLike} [scheduler] The scheduler on which to schedule the
 * callbacks.
 * @return {function(...params: *): Observable} A function which returns the
 * Observable that delivers the same values the callback would deliver.
 * @name bindCallback
 */

export function bindCallback<T>(
  callbackFunc: Function,
  scheduler?: SchedulerLike
): (...args: any[]) => Observable<T> {
  return function (this: any, ...args: any[]): Observable<T> {
    const context = this;
    let subject: AsyncSubject<T>;
    const params = {
      args,
      callbackFunc,
      scheduler,
      context,
      subject,
    };
    return sourceAsObservable((type: FOType.SUBSCRIBE, sink: Sink<T>, subs: Subscription) => {
      if (type === FOType.SUBSCRIBE) {
        if (!scheduler) {
          if (!subject) {
            subject = new AsyncSubject<T>();

            const handler = (...handlerArgs: any[]) => {
              subject.next(handlerArgs.length <= 1 ? handlerArgs[0] : handlerArgs);
              subject.complete();
            };

            try {
              callbackFunc.apply(context, [...args, handler]);
            } catch (err) {
              // TODO: canReportError
              // if (canReportError(subject)) {
                subject.error(err);
              // } else {
              //   console.warn(err);
              // }
            }
          }
          subject(FOType.SUBSCRIBE, sink, subs);
        } else {
          const state: WorkState<T> = {
            subs, sink, params,
          };
          scheduler.schedule<WorkState<T>>(callbackWork, 0, state, subs);
        }
      }
    });
  };
}

interface WorkState<T> {
  subs: Subscription;
  sink: Sink<T>;
  params: ParamsState<T>;
}

interface ParamsState<T> {
  args: any[];
  callbackFunc: Function;
  scheduler: SchedulerLike;
  context: any;
  subject: AsyncSubject<T>;
}

function callbackWork<T>(state: WorkState<T>) {
  const { subs, sink, params } = state;
  if (subs.closed) {
    return;
  }
  let { subject } = params;
  if (!subject) {
    const { args, callbackFunc, scheduler, context } = params;
    subject = params.subject = new AsyncSubject<T>();

    const handler = (...handlerArgs: any[]) => {
      const value = handlerArgs.length <= 1 ? handlerArgs[0] : handlerArgs;
      scheduler.schedule<NextState<T>>(nextWork, 0, { value, subject }, subs);
    };

    try {
      callbackFunc.apply(context, [...args, handler]);
    } catch (err) {
      subject.error(err);
    }
  }
  subject(FOType.SUBSCRIBE, sink, subs);
}

interface NextState<T> {
  subject: AsyncSubject<T>;
  value: T;
}

function nextWork<T>(state: NextState<T>) {
  const { value, subject } = state;
  subject.next(value);
  subject.complete();
}