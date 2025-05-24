interface SagaContext extends Object {}

// TODO -> each rollback function should be called with the context as it was when the "action" step was called

type SagaStep = {
  action: (req: Request, ctx: SagaContext) => Promise<void>;
  rollback: (req: Request, ctx: SagaContext, rej: Error) => Promise<void>;
};

// TODO -> make this a class and instantiate with the "new" operator?
export function createSaga(steps: Array<SagaStep> = []): Promise<"done"> {
  return new Promise((res, rej) => {
    res("done");
  });
}
