
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BoatPoll
 * 
 */
export type BoatPoll = $Result.DefaultSelection<Prisma.$BoatPollPayload>
/**
 * Model BoatPollOption
 * 
 */
export type BoatPollOption = $Result.DefaultSelection<Prisma.$BoatPollOptionPayload>
/**
 * Model BoatPollVote
 * 
 */
export type BoatPollVote = $Result.DefaultSelection<Prisma.$BoatPollVotePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more BoatPolls
 * const boatPolls = await prisma.boatPoll.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more BoatPolls
   * const boatPolls = await prisma.boatPoll.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.boatPoll`: Exposes CRUD operations for the **BoatPoll** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoatPolls
    * const boatPolls = await prisma.boatPoll.findMany()
    * ```
    */
  get boatPoll(): Prisma.BoatPollDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.boatPollOption`: Exposes CRUD operations for the **BoatPollOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoatPollOptions
    * const boatPollOptions = await prisma.boatPollOption.findMany()
    * ```
    */
  get boatPollOption(): Prisma.BoatPollOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.boatPollVote`: Exposes CRUD operations for the **BoatPollVote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoatPollVotes
    * const boatPollVotes = await prisma.boatPollVote.findMany()
    * ```
    */
  get boatPollVote(): Prisma.BoatPollVoteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BoatPoll: 'BoatPoll',
    BoatPollOption: 'BoatPollOption',
    BoatPollVote: 'BoatPollVote'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "boatPoll" | "boatPollOption" | "boatPollVote"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BoatPoll: {
        payload: Prisma.$BoatPollPayload<ExtArgs>
        fields: Prisma.BoatPollFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoatPollFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoatPollFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollPayload>
          }
          findFirst: {
            args: Prisma.BoatPollFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoatPollFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollPayload>
          }
          findMany: {
            args: Prisma.BoatPollFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollPayload>[]
          }
          create: {
            args: Prisma.BoatPollCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollPayload>
          }
          createMany: {
            args: Prisma.BoatPollCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoatPollCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollPayload>[]
          }
          delete: {
            args: Prisma.BoatPollDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollPayload>
          }
          update: {
            args: Prisma.BoatPollUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollPayload>
          }
          deleteMany: {
            args: Prisma.BoatPollDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoatPollUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoatPollUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollPayload>[]
          }
          upsert: {
            args: Prisma.BoatPollUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollPayload>
          }
          aggregate: {
            args: Prisma.BoatPollAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoatPoll>
          }
          groupBy: {
            args: Prisma.BoatPollGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoatPollGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoatPollCountArgs<ExtArgs>
            result: $Utils.Optional<BoatPollCountAggregateOutputType> | number
          }
        }
      }
      BoatPollOption: {
        payload: Prisma.$BoatPollOptionPayload<ExtArgs>
        fields: Prisma.BoatPollOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoatPollOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoatPollOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollOptionPayload>
          }
          findFirst: {
            args: Prisma.BoatPollOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoatPollOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollOptionPayload>
          }
          findMany: {
            args: Prisma.BoatPollOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollOptionPayload>[]
          }
          create: {
            args: Prisma.BoatPollOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollOptionPayload>
          }
          createMany: {
            args: Prisma.BoatPollOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoatPollOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollOptionPayload>[]
          }
          delete: {
            args: Prisma.BoatPollOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollOptionPayload>
          }
          update: {
            args: Prisma.BoatPollOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollOptionPayload>
          }
          deleteMany: {
            args: Prisma.BoatPollOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoatPollOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoatPollOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollOptionPayload>[]
          }
          upsert: {
            args: Prisma.BoatPollOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollOptionPayload>
          }
          aggregate: {
            args: Prisma.BoatPollOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoatPollOption>
          }
          groupBy: {
            args: Prisma.BoatPollOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoatPollOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoatPollOptionCountArgs<ExtArgs>
            result: $Utils.Optional<BoatPollOptionCountAggregateOutputType> | number
          }
        }
      }
      BoatPollVote: {
        payload: Prisma.$BoatPollVotePayload<ExtArgs>
        fields: Prisma.BoatPollVoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoatPollVoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollVotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoatPollVoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollVotePayload>
          }
          findFirst: {
            args: Prisma.BoatPollVoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollVotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoatPollVoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollVotePayload>
          }
          findMany: {
            args: Prisma.BoatPollVoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollVotePayload>[]
          }
          create: {
            args: Prisma.BoatPollVoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollVotePayload>
          }
          createMany: {
            args: Prisma.BoatPollVoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoatPollVoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollVotePayload>[]
          }
          delete: {
            args: Prisma.BoatPollVoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollVotePayload>
          }
          update: {
            args: Prisma.BoatPollVoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollVotePayload>
          }
          deleteMany: {
            args: Prisma.BoatPollVoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoatPollVoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoatPollVoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollVotePayload>[]
          }
          upsert: {
            args: Prisma.BoatPollVoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoatPollVotePayload>
          }
          aggregate: {
            args: Prisma.BoatPollVoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoatPollVote>
          }
          groupBy: {
            args: Prisma.BoatPollVoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoatPollVoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoatPollVoteCountArgs<ExtArgs>
            result: $Utils.Optional<BoatPollVoteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    boatPoll?: BoatPollOmit
    boatPollOption?: BoatPollOptionOmit
    boatPollVote?: BoatPollVoteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BoatPollCountOutputType
   */

  export type BoatPollCountOutputType = {
    options: number
    votes: number
  }

  export type BoatPollCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | BoatPollCountOutputTypeCountOptionsArgs
    votes?: boolean | BoatPollCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * BoatPollCountOutputType without action
   */
  export type BoatPollCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollCountOutputType
     */
    select?: BoatPollCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoatPollCountOutputType without action
   */
  export type BoatPollCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoatPollOptionWhereInput
  }

  /**
   * BoatPollCountOutputType without action
   */
  export type BoatPollCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoatPollVoteWhereInput
  }


  /**
   * Count Type BoatPollOptionCountOutputType
   */

  export type BoatPollOptionCountOutputType = {
    votes: number
  }

  export type BoatPollOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | BoatPollOptionCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * BoatPollOptionCountOutputType without action
   */
  export type BoatPollOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollOptionCountOutputType
     */
    select?: BoatPollOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoatPollOptionCountOutputType without action
   */
  export type BoatPollOptionCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoatPollVoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BoatPoll
   */

  export type AggregateBoatPoll = {
    _count: BoatPollCountAggregateOutputType | null
    _avg: BoatPollAvgAggregateOutputType | null
    _sum: BoatPollSumAggregateOutputType | null
    _min: BoatPollMinAggregateOutputType | null
    _max: BoatPollMaxAggregateOutputType | null
  }

  export type BoatPollAvgAggregateOutputType = {
    maxParticipants: number | null
  }

  export type BoatPollSumAggregateOutputType = {
    maxParticipants: number | null
  }

  export type BoatPollMinAggregateOutputType = {
    id: string | null
    title: string | null
    allowMultiple: boolean | null
    isAnonymous: boolean | null
    resultVisibility: string | null
    endDate: Date | null
    maxParticipants: number | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoatPollMaxAggregateOutputType = {
    id: string | null
    title: string | null
    allowMultiple: boolean | null
    isAnonymous: boolean | null
    resultVisibility: string | null
    endDate: Date | null
    maxParticipants: number | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoatPollCountAggregateOutputType = {
    id: number
    title: number
    allowMultiple: number
    isAnonymous: number
    resultVisibility: number
    endDate: number
    maxParticipants: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BoatPollAvgAggregateInputType = {
    maxParticipants?: true
  }

  export type BoatPollSumAggregateInputType = {
    maxParticipants?: true
  }

  export type BoatPollMinAggregateInputType = {
    id?: true
    title?: true
    allowMultiple?: true
    isAnonymous?: true
    resultVisibility?: true
    endDate?: true
    maxParticipants?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoatPollMaxAggregateInputType = {
    id?: true
    title?: true
    allowMultiple?: true
    isAnonymous?: true
    resultVisibility?: true
    endDate?: true
    maxParticipants?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoatPollCountAggregateInputType = {
    id?: true
    title?: true
    allowMultiple?: true
    isAnonymous?: true
    resultVisibility?: true
    endDate?: true
    maxParticipants?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BoatPollAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoatPoll to aggregate.
     */
    where?: BoatPollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoatPolls to fetch.
     */
    orderBy?: BoatPollOrderByWithRelationInput | BoatPollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoatPollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoatPolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoatPolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoatPolls
    **/
    _count?: true | BoatPollCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoatPollAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoatPollSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoatPollMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoatPollMaxAggregateInputType
  }

  export type GetBoatPollAggregateType<T extends BoatPollAggregateArgs> = {
        [P in keyof T & keyof AggregateBoatPoll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoatPoll[P]>
      : GetScalarType<T[P], AggregateBoatPoll[P]>
  }




  export type BoatPollGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoatPollWhereInput
    orderBy?: BoatPollOrderByWithAggregationInput | BoatPollOrderByWithAggregationInput[]
    by: BoatPollScalarFieldEnum[] | BoatPollScalarFieldEnum
    having?: BoatPollScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoatPollCountAggregateInputType | true
    _avg?: BoatPollAvgAggregateInputType
    _sum?: BoatPollSumAggregateInputType
    _min?: BoatPollMinAggregateInputType
    _max?: BoatPollMaxAggregateInputType
  }

  export type BoatPollGroupByOutputType = {
    id: string
    title: string
    allowMultiple: boolean
    isAnonymous: boolean
    resultVisibility: string
    endDate: Date | null
    maxParticipants: number | null
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: BoatPollCountAggregateOutputType | null
    _avg: BoatPollAvgAggregateOutputType | null
    _sum: BoatPollSumAggregateOutputType | null
    _min: BoatPollMinAggregateOutputType | null
    _max: BoatPollMaxAggregateOutputType | null
  }

  type GetBoatPollGroupByPayload<T extends BoatPollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoatPollGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoatPollGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoatPollGroupByOutputType[P]>
            : GetScalarType<T[P], BoatPollGroupByOutputType[P]>
        }
      >
    >


  export type BoatPollSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    allowMultiple?: boolean
    isAnonymous?: boolean
    resultVisibility?: boolean
    endDate?: boolean
    maxParticipants?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    options?: boolean | BoatPoll$optionsArgs<ExtArgs>
    votes?: boolean | BoatPoll$votesArgs<ExtArgs>
    _count?: boolean | BoatPollCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boatPoll"]>

  export type BoatPollSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    allowMultiple?: boolean
    isAnonymous?: boolean
    resultVisibility?: boolean
    endDate?: boolean
    maxParticipants?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["boatPoll"]>

  export type BoatPollSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    allowMultiple?: boolean
    isAnonymous?: boolean
    resultVisibility?: boolean
    endDate?: boolean
    maxParticipants?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["boatPoll"]>

  export type BoatPollSelectScalar = {
    id?: boolean
    title?: boolean
    allowMultiple?: boolean
    isAnonymous?: boolean
    resultVisibility?: boolean
    endDate?: boolean
    maxParticipants?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BoatPollOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "allowMultiple" | "isAnonymous" | "resultVisibility" | "endDate" | "maxParticipants" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["boatPoll"]>
  export type BoatPollInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | BoatPoll$optionsArgs<ExtArgs>
    votes?: boolean | BoatPoll$votesArgs<ExtArgs>
    _count?: boolean | BoatPollCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BoatPollIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BoatPollIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BoatPollPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BoatPoll"
    objects: {
      options: Prisma.$BoatPollOptionPayload<ExtArgs>[]
      votes: Prisma.$BoatPollVotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      allowMultiple: boolean
      isAnonymous: boolean
      resultVisibility: string
      endDate: Date | null
      maxParticipants: number | null
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["boatPoll"]>
    composites: {}
  }

  type BoatPollGetPayload<S extends boolean | null | undefined | BoatPollDefaultArgs> = $Result.GetResult<Prisma.$BoatPollPayload, S>

  type BoatPollCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoatPollFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoatPollCountAggregateInputType | true
    }

  export interface BoatPollDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BoatPoll'], meta: { name: 'BoatPoll' } }
    /**
     * Find zero or one BoatPoll that matches the filter.
     * @param {BoatPollFindUniqueArgs} args - Arguments to find a BoatPoll
     * @example
     * // Get one BoatPoll
     * const boatPoll = await prisma.boatPoll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoatPollFindUniqueArgs>(args: SelectSubset<T, BoatPollFindUniqueArgs<ExtArgs>>): Prisma__BoatPollClient<$Result.GetResult<Prisma.$BoatPollPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BoatPoll that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoatPollFindUniqueOrThrowArgs} args - Arguments to find a BoatPoll
     * @example
     * // Get one BoatPoll
     * const boatPoll = await prisma.boatPoll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoatPollFindUniqueOrThrowArgs>(args: SelectSubset<T, BoatPollFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoatPollClient<$Result.GetResult<Prisma.$BoatPollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BoatPoll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollFindFirstArgs} args - Arguments to find a BoatPoll
     * @example
     * // Get one BoatPoll
     * const boatPoll = await prisma.boatPoll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoatPollFindFirstArgs>(args?: SelectSubset<T, BoatPollFindFirstArgs<ExtArgs>>): Prisma__BoatPollClient<$Result.GetResult<Prisma.$BoatPollPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BoatPoll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollFindFirstOrThrowArgs} args - Arguments to find a BoatPoll
     * @example
     * // Get one BoatPoll
     * const boatPoll = await prisma.boatPoll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoatPollFindFirstOrThrowArgs>(args?: SelectSubset<T, BoatPollFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoatPollClient<$Result.GetResult<Prisma.$BoatPollPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BoatPolls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoatPolls
     * const boatPolls = await prisma.boatPoll.findMany()
     * 
     * // Get first 10 BoatPolls
     * const boatPolls = await prisma.boatPoll.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boatPollWithIdOnly = await prisma.boatPoll.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoatPollFindManyArgs>(args?: SelectSubset<T, BoatPollFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoatPollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BoatPoll.
     * @param {BoatPollCreateArgs} args - Arguments to create a BoatPoll.
     * @example
     * // Create one BoatPoll
     * const BoatPoll = await prisma.boatPoll.create({
     *   data: {
     *     // ... data to create a BoatPoll
     *   }
     * })
     * 
     */
    create<T extends BoatPollCreateArgs>(args: SelectSubset<T, BoatPollCreateArgs<ExtArgs>>): Prisma__BoatPollClient<$Result.GetResult<Prisma.$BoatPollPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BoatPolls.
     * @param {BoatPollCreateManyArgs} args - Arguments to create many BoatPolls.
     * @example
     * // Create many BoatPolls
     * const boatPoll = await prisma.boatPoll.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoatPollCreateManyArgs>(args?: SelectSubset<T, BoatPollCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BoatPolls and returns the data saved in the database.
     * @param {BoatPollCreateManyAndReturnArgs} args - Arguments to create many BoatPolls.
     * @example
     * // Create many BoatPolls
     * const boatPoll = await prisma.boatPoll.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BoatPolls and only return the `id`
     * const boatPollWithIdOnly = await prisma.boatPoll.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoatPollCreateManyAndReturnArgs>(args?: SelectSubset<T, BoatPollCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoatPollPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BoatPoll.
     * @param {BoatPollDeleteArgs} args - Arguments to delete one BoatPoll.
     * @example
     * // Delete one BoatPoll
     * const BoatPoll = await prisma.boatPoll.delete({
     *   where: {
     *     // ... filter to delete one BoatPoll
     *   }
     * })
     * 
     */
    delete<T extends BoatPollDeleteArgs>(args: SelectSubset<T, BoatPollDeleteArgs<ExtArgs>>): Prisma__BoatPollClient<$Result.GetResult<Prisma.$BoatPollPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BoatPoll.
     * @param {BoatPollUpdateArgs} args - Arguments to update one BoatPoll.
     * @example
     * // Update one BoatPoll
     * const boatPoll = await prisma.boatPoll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoatPollUpdateArgs>(args: SelectSubset<T, BoatPollUpdateArgs<ExtArgs>>): Prisma__BoatPollClient<$Result.GetResult<Prisma.$BoatPollPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BoatPolls.
     * @param {BoatPollDeleteManyArgs} args - Arguments to filter BoatPolls to delete.
     * @example
     * // Delete a few BoatPolls
     * const { count } = await prisma.boatPoll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoatPollDeleteManyArgs>(args?: SelectSubset<T, BoatPollDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoatPolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoatPolls
     * const boatPoll = await prisma.boatPoll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoatPollUpdateManyArgs>(args: SelectSubset<T, BoatPollUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoatPolls and returns the data updated in the database.
     * @param {BoatPollUpdateManyAndReturnArgs} args - Arguments to update many BoatPolls.
     * @example
     * // Update many BoatPolls
     * const boatPoll = await prisma.boatPoll.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BoatPolls and only return the `id`
     * const boatPollWithIdOnly = await prisma.boatPoll.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BoatPollUpdateManyAndReturnArgs>(args: SelectSubset<T, BoatPollUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoatPollPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BoatPoll.
     * @param {BoatPollUpsertArgs} args - Arguments to update or create a BoatPoll.
     * @example
     * // Update or create a BoatPoll
     * const boatPoll = await prisma.boatPoll.upsert({
     *   create: {
     *     // ... data to create a BoatPoll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoatPoll we want to update
     *   }
     * })
     */
    upsert<T extends BoatPollUpsertArgs>(args: SelectSubset<T, BoatPollUpsertArgs<ExtArgs>>): Prisma__BoatPollClient<$Result.GetResult<Prisma.$BoatPollPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BoatPolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollCountArgs} args - Arguments to filter BoatPolls to count.
     * @example
     * // Count the number of BoatPolls
     * const count = await prisma.boatPoll.count({
     *   where: {
     *     // ... the filter for the BoatPolls we want to count
     *   }
     * })
    **/
    count<T extends BoatPollCountArgs>(
      args?: Subset<T, BoatPollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoatPollCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoatPoll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoatPollAggregateArgs>(args: Subset<T, BoatPollAggregateArgs>): Prisma.PrismaPromise<GetBoatPollAggregateType<T>>

    /**
     * Group by BoatPoll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoatPollGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoatPollGroupByArgs['orderBy'] }
        : { orderBy?: BoatPollGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoatPollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoatPollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BoatPoll model
   */
  readonly fields: BoatPollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoatPoll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoatPollClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    options<T extends BoatPoll$optionsArgs<ExtArgs> = {}>(args?: Subset<T, BoatPoll$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoatPollOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends BoatPoll$votesArgs<ExtArgs> = {}>(args?: Subset<T, BoatPoll$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoatPollVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BoatPoll model
   */
  interface BoatPollFieldRefs {
    readonly id: FieldRef<"BoatPoll", 'String'>
    readonly title: FieldRef<"BoatPoll", 'String'>
    readonly allowMultiple: FieldRef<"BoatPoll", 'Boolean'>
    readonly isAnonymous: FieldRef<"BoatPoll", 'Boolean'>
    readonly resultVisibility: FieldRef<"BoatPoll", 'String'>
    readonly endDate: FieldRef<"BoatPoll", 'DateTime'>
    readonly maxParticipants: FieldRef<"BoatPoll", 'Int'>
    readonly createdById: FieldRef<"BoatPoll", 'String'>
    readonly createdAt: FieldRef<"BoatPoll", 'DateTime'>
    readonly updatedAt: FieldRef<"BoatPoll", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BoatPoll findUnique
   */
  export type BoatPollFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPoll
     */
    select?: BoatPollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPoll
     */
    omit?: BoatPollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollInclude<ExtArgs> | null
    /**
     * Filter, which BoatPoll to fetch.
     */
    where: BoatPollWhereUniqueInput
  }

  /**
   * BoatPoll findUniqueOrThrow
   */
  export type BoatPollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPoll
     */
    select?: BoatPollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPoll
     */
    omit?: BoatPollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollInclude<ExtArgs> | null
    /**
     * Filter, which BoatPoll to fetch.
     */
    where: BoatPollWhereUniqueInput
  }

  /**
   * BoatPoll findFirst
   */
  export type BoatPollFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPoll
     */
    select?: BoatPollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPoll
     */
    omit?: BoatPollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollInclude<ExtArgs> | null
    /**
     * Filter, which BoatPoll to fetch.
     */
    where?: BoatPollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoatPolls to fetch.
     */
    orderBy?: BoatPollOrderByWithRelationInput | BoatPollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoatPolls.
     */
    cursor?: BoatPollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoatPolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoatPolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoatPolls.
     */
    distinct?: BoatPollScalarFieldEnum | BoatPollScalarFieldEnum[]
  }

  /**
   * BoatPoll findFirstOrThrow
   */
  export type BoatPollFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPoll
     */
    select?: BoatPollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPoll
     */
    omit?: BoatPollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollInclude<ExtArgs> | null
    /**
     * Filter, which BoatPoll to fetch.
     */
    where?: BoatPollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoatPolls to fetch.
     */
    orderBy?: BoatPollOrderByWithRelationInput | BoatPollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoatPolls.
     */
    cursor?: BoatPollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoatPolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoatPolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoatPolls.
     */
    distinct?: BoatPollScalarFieldEnum | BoatPollScalarFieldEnum[]
  }

  /**
   * BoatPoll findMany
   */
  export type BoatPollFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPoll
     */
    select?: BoatPollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPoll
     */
    omit?: BoatPollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollInclude<ExtArgs> | null
    /**
     * Filter, which BoatPolls to fetch.
     */
    where?: BoatPollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoatPolls to fetch.
     */
    orderBy?: BoatPollOrderByWithRelationInput | BoatPollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoatPolls.
     */
    cursor?: BoatPollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoatPolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoatPolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoatPolls.
     */
    distinct?: BoatPollScalarFieldEnum | BoatPollScalarFieldEnum[]
  }

  /**
   * BoatPoll create
   */
  export type BoatPollCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPoll
     */
    select?: BoatPollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPoll
     */
    omit?: BoatPollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollInclude<ExtArgs> | null
    /**
     * The data needed to create a BoatPoll.
     */
    data: XOR<BoatPollCreateInput, BoatPollUncheckedCreateInput>
  }

  /**
   * BoatPoll createMany
   */
  export type BoatPollCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BoatPolls.
     */
    data: BoatPollCreateManyInput | BoatPollCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BoatPoll createManyAndReturn
   */
  export type BoatPollCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPoll
     */
    select?: BoatPollSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPoll
     */
    omit?: BoatPollOmit<ExtArgs> | null
    /**
     * The data used to create many BoatPolls.
     */
    data: BoatPollCreateManyInput | BoatPollCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BoatPoll update
   */
  export type BoatPollUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPoll
     */
    select?: BoatPollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPoll
     */
    omit?: BoatPollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollInclude<ExtArgs> | null
    /**
     * The data needed to update a BoatPoll.
     */
    data: XOR<BoatPollUpdateInput, BoatPollUncheckedUpdateInput>
    /**
     * Choose, which BoatPoll to update.
     */
    where: BoatPollWhereUniqueInput
  }

  /**
   * BoatPoll updateMany
   */
  export type BoatPollUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BoatPolls.
     */
    data: XOR<BoatPollUpdateManyMutationInput, BoatPollUncheckedUpdateManyInput>
    /**
     * Filter which BoatPolls to update
     */
    where?: BoatPollWhereInput
    /**
     * Limit how many BoatPolls to update.
     */
    limit?: number
  }

  /**
   * BoatPoll updateManyAndReturn
   */
  export type BoatPollUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPoll
     */
    select?: BoatPollSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPoll
     */
    omit?: BoatPollOmit<ExtArgs> | null
    /**
     * The data used to update BoatPolls.
     */
    data: XOR<BoatPollUpdateManyMutationInput, BoatPollUncheckedUpdateManyInput>
    /**
     * Filter which BoatPolls to update
     */
    where?: BoatPollWhereInput
    /**
     * Limit how many BoatPolls to update.
     */
    limit?: number
  }

  /**
   * BoatPoll upsert
   */
  export type BoatPollUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPoll
     */
    select?: BoatPollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPoll
     */
    omit?: BoatPollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollInclude<ExtArgs> | null
    /**
     * The filter to search for the BoatPoll to update in case it exists.
     */
    where: BoatPollWhereUniqueInput
    /**
     * In case the BoatPoll found by the `where` argument doesn't exist, create a new BoatPoll with this data.
     */
    create: XOR<BoatPollCreateInput, BoatPollUncheckedCreateInput>
    /**
     * In case the BoatPoll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoatPollUpdateInput, BoatPollUncheckedUpdateInput>
  }

  /**
   * BoatPoll delete
   */
  export type BoatPollDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPoll
     */
    select?: BoatPollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPoll
     */
    omit?: BoatPollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollInclude<ExtArgs> | null
    /**
     * Filter which BoatPoll to delete.
     */
    where: BoatPollWhereUniqueInput
  }

  /**
   * BoatPoll deleteMany
   */
  export type BoatPollDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoatPolls to delete
     */
    where?: BoatPollWhereInput
    /**
     * Limit how many BoatPolls to delete.
     */
    limit?: number
  }

  /**
   * BoatPoll.options
   */
  export type BoatPoll$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollOption
     */
    select?: BoatPollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollOption
     */
    omit?: BoatPollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollOptionInclude<ExtArgs> | null
    where?: BoatPollOptionWhereInput
    orderBy?: BoatPollOptionOrderByWithRelationInput | BoatPollOptionOrderByWithRelationInput[]
    cursor?: BoatPollOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoatPollOptionScalarFieldEnum | BoatPollOptionScalarFieldEnum[]
  }

  /**
   * BoatPoll.votes
   */
  export type BoatPoll$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollVote
     */
    select?: BoatPollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollVote
     */
    omit?: BoatPollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollVoteInclude<ExtArgs> | null
    where?: BoatPollVoteWhereInput
    orderBy?: BoatPollVoteOrderByWithRelationInput | BoatPollVoteOrderByWithRelationInput[]
    cursor?: BoatPollVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoatPollVoteScalarFieldEnum | BoatPollVoteScalarFieldEnum[]
  }

  /**
   * BoatPoll without action
   */
  export type BoatPollDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPoll
     */
    select?: BoatPollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPoll
     */
    omit?: BoatPollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollInclude<ExtArgs> | null
  }


  /**
   * Model BoatPollOption
   */

  export type AggregateBoatPollOption = {
    _count: BoatPollOptionCountAggregateOutputType | null
    _avg: BoatPollOptionAvgAggregateOutputType | null
    _sum: BoatPollOptionSumAggregateOutputType | null
    _min: BoatPollOptionMinAggregateOutputType | null
    _max: BoatPollOptionMaxAggregateOutputType | null
  }

  export type BoatPollOptionAvgAggregateOutputType = {
    order: number | null
  }

  export type BoatPollOptionSumAggregateOutputType = {
    order: number | null
  }

  export type BoatPollOptionMinAggregateOutputType = {
    id: string | null
    pollId: string | null
    text: string | null
    order: number | null
  }

  export type BoatPollOptionMaxAggregateOutputType = {
    id: string | null
    pollId: string | null
    text: string | null
    order: number | null
  }

  export type BoatPollOptionCountAggregateOutputType = {
    id: number
    pollId: number
    text: number
    order: number
    _all: number
  }


  export type BoatPollOptionAvgAggregateInputType = {
    order?: true
  }

  export type BoatPollOptionSumAggregateInputType = {
    order?: true
  }

  export type BoatPollOptionMinAggregateInputType = {
    id?: true
    pollId?: true
    text?: true
    order?: true
  }

  export type BoatPollOptionMaxAggregateInputType = {
    id?: true
    pollId?: true
    text?: true
    order?: true
  }

  export type BoatPollOptionCountAggregateInputType = {
    id?: true
    pollId?: true
    text?: true
    order?: true
    _all?: true
  }

  export type BoatPollOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoatPollOption to aggregate.
     */
    where?: BoatPollOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoatPollOptions to fetch.
     */
    orderBy?: BoatPollOptionOrderByWithRelationInput | BoatPollOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoatPollOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoatPollOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoatPollOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoatPollOptions
    **/
    _count?: true | BoatPollOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoatPollOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoatPollOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoatPollOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoatPollOptionMaxAggregateInputType
  }

  export type GetBoatPollOptionAggregateType<T extends BoatPollOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateBoatPollOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoatPollOption[P]>
      : GetScalarType<T[P], AggregateBoatPollOption[P]>
  }




  export type BoatPollOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoatPollOptionWhereInput
    orderBy?: BoatPollOptionOrderByWithAggregationInput | BoatPollOptionOrderByWithAggregationInput[]
    by: BoatPollOptionScalarFieldEnum[] | BoatPollOptionScalarFieldEnum
    having?: BoatPollOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoatPollOptionCountAggregateInputType | true
    _avg?: BoatPollOptionAvgAggregateInputType
    _sum?: BoatPollOptionSumAggregateInputType
    _min?: BoatPollOptionMinAggregateInputType
    _max?: BoatPollOptionMaxAggregateInputType
  }

  export type BoatPollOptionGroupByOutputType = {
    id: string
    pollId: string
    text: string
    order: number
    _count: BoatPollOptionCountAggregateOutputType | null
    _avg: BoatPollOptionAvgAggregateOutputType | null
    _sum: BoatPollOptionSumAggregateOutputType | null
    _min: BoatPollOptionMinAggregateOutputType | null
    _max: BoatPollOptionMaxAggregateOutputType | null
  }

  type GetBoatPollOptionGroupByPayload<T extends BoatPollOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoatPollOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoatPollOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoatPollOptionGroupByOutputType[P]>
            : GetScalarType<T[P], BoatPollOptionGroupByOutputType[P]>
        }
      >
    >


  export type BoatPollOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pollId?: boolean
    text?: boolean
    order?: boolean
    poll?: boolean | BoatPollDefaultArgs<ExtArgs>
    votes?: boolean | BoatPollOption$votesArgs<ExtArgs>
    _count?: boolean | BoatPollOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boatPollOption"]>

  export type BoatPollOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pollId?: boolean
    text?: boolean
    order?: boolean
    poll?: boolean | BoatPollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boatPollOption"]>

  export type BoatPollOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pollId?: boolean
    text?: boolean
    order?: boolean
    poll?: boolean | BoatPollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boatPollOption"]>

  export type BoatPollOptionSelectScalar = {
    id?: boolean
    pollId?: boolean
    text?: boolean
    order?: boolean
  }

  export type BoatPollOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pollId" | "text" | "order", ExtArgs["result"]["boatPollOption"]>
  export type BoatPollOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | BoatPollDefaultArgs<ExtArgs>
    votes?: boolean | BoatPollOption$votesArgs<ExtArgs>
    _count?: boolean | BoatPollOptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BoatPollOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | BoatPollDefaultArgs<ExtArgs>
  }
  export type BoatPollOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | BoatPollDefaultArgs<ExtArgs>
  }

  export type $BoatPollOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BoatPollOption"
    objects: {
      poll: Prisma.$BoatPollPayload<ExtArgs>
      votes: Prisma.$BoatPollVotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pollId: string
      text: string
      order: number
    }, ExtArgs["result"]["boatPollOption"]>
    composites: {}
  }

  type BoatPollOptionGetPayload<S extends boolean | null | undefined | BoatPollOptionDefaultArgs> = $Result.GetResult<Prisma.$BoatPollOptionPayload, S>

  type BoatPollOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoatPollOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoatPollOptionCountAggregateInputType | true
    }

  export interface BoatPollOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BoatPollOption'], meta: { name: 'BoatPollOption' } }
    /**
     * Find zero or one BoatPollOption that matches the filter.
     * @param {BoatPollOptionFindUniqueArgs} args - Arguments to find a BoatPollOption
     * @example
     * // Get one BoatPollOption
     * const boatPollOption = await prisma.boatPollOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoatPollOptionFindUniqueArgs>(args: SelectSubset<T, BoatPollOptionFindUniqueArgs<ExtArgs>>): Prisma__BoatPollOptionClient<$Result.GetResult<Prisma.$BoatPollOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BoatPollOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoatPollOptionFindUniqueOrThrowArgs} args - Arguments to find a BoatPollOption
     * @example
     * // Get one BoatPollOption
     * const boatPollOption = await prisma.boatPollOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoatPollOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, BoatPollOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoatPollOptionClient<$Result.GetResult<Prisma.$BoatPollOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BoatPollOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollOptionFindFirstArgs} args - Arguments to find a BoatPollOption
     * @example
     * // Get one BoatPollOption
     * const boatPollOption = await prisma.boatPollOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoatPollOptionFindFirstArgs>(args?: SelectSubset<T, BoatPollOptionFindFirstArgs<ExtArgs>>): Prisma__BoatPollOptionClient<$Result.GetResult<Prisma.$BoatPollOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BoatPollOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollOptionFindFirstOrThrowArgs} args - Arguments to find a BoatPollOption
     * @example
     * // Get one BoatPollOption
     * const boatPollOption = await prisma.boatPollOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoatPollOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, BoatPollOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoatPollOptionClient<$Result.GetResult<Prisma.$BoatPollOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BoatPollOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoatPollOptions
     * const boatPollOptions = await prisma.boatPollOption.findMany()
     * 
     * // Get first 10 BoatPollOptions
     * const boatPollOptions = await prisma.boatPollOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boatPollOptionWithIdOnly = await prisma.boatPollOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoatPollOptionFindManyArgs>(args?: SelectSubset<T, BoatPollOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoatPollOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BoatPollOption.
     * @param {BoatPollOptionCreateArgs} args - Arguments to create a BoatPollOption.
     * @example
     * // Create one BoatPollOption
     * const BoatPollOption = await prisma.boatPollOption.create({
     *   data: {
     *     // ... data to create a BoatPollOption
     *   }
     * })
     * 
     */
    create<T extends BoatPollOptionCreateArgs>(args: SelectSubset<T, BoatPollOptionCreateArgs<ExtArgs>>): Prisma__BoatPollOptionClient<$Result.GetResult<Prisma.$BoatPollOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BoatPollOptions.
     * @param {BoatPollOptionCreateManyArgs} args - Arguments to create many BoatPollOptions.
     * @example
     * // Create many BoatPollOptions
     * const boatPollOption = await prisma.boatPollOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoatPollOptionCreateManyArgs>(args?: SelectSubset<T, BoatPollOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BoatPollOptions and returns the data saved in the database.
     * @param {BoatPollOptionCreateManyAndReturnArgs} args - Arguments to create many BoatPollOptions.
     * @example
     * // Create many BoatPollOptions
     * const boatPollOption = await prisma.boatPollOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BoatPollOptions and only return the `id`
     * const boatPollOptionWithIdOnly = await prisma.boatPollOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoatPollOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, BoatPollOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoatPollOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BoatPollOption.
     * @param {BoatPollOptionDeleteArgs} args - Arguments to delete one BoatPollOption.
     * @example
     * // Delete one BoatPollOption
     * const BoatPollOption = await prisma.boatPollOption.delete({
     *   where: {
     *     // ... filter to delete one BoatPollOption
     *   }
     * })
     * 
     */
    delete<T extends BoatPollOptionDeleteArgs>(args: SelectSubset<T, BoatPollOptionDeleteArgs<ExtArgs>>): Prisma__BoatPollOptionClient<$Result.GetResult<Prisma.$BoatPollOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BoatPollOption.
     * @param {BoatPollOptionUpdateArgs} args - Arguments to update one BoatPollOption.
     * @example
     * // Update one BoatPollOption
     * const boatPollOption = await prisma.boatPollOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoatPollOptionUpdateArgs>(args: SelectSubset<T, BoatPollOptionUpdateArgs<ExtArgs>>): Prisma__BoatPollOptionClient<$Result.GetResult<Prisma.$BoatPollOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BoatPollOptions.
     * @param {BoatPollOptionDeleteManyArgs} args - Arguments to filter BoatPollOptions to delete.
     * @example
     * // Delete a few BoatPollOptions
     * const { count } = await prisma.boatPollOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoatPollOptionDeleteManyArgs>(args?: SelectSubset<T, BoatPollOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoatPollOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoatPollOptions
     * const boatPollOption = await prisma.boatPollOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoatPollOptionUpdateManyArgs>(args: SelectSubset<T, BoatPollOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoatPollOptions and returns the data updated in the database.
     * @param {BoatPollOptionUpdateManyAndReturnArgs} args - Arguments to update many BoatPollOptions.
     * @example
     * // Update many BoatPollOptions
     * const boatPollOption = await prisma.boatPollOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BoatPollOptions and only return the `id`
     * const boatPollOptionWithIdOnly = await prisma.boatPollOption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BoatPollOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, BoatPollOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoatPollOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BoatPollOption.
     * @param {BoatPollOptionUpsertArgs} args - Arguments to update or create a BoatPollOption.
     * @example
     * // Update or create a BoatPollOption
     * const boatPollOption = await prisma.boatPollOption.upsert({
     *   create: {
     *     // ... data to create a BoatPollOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoatPollOption we want to update
     *   }
     * })
     */
    upsert<T extends BoatPollOptionUpsertArgs>(args: SelectSubset<T, BoatPollOptionUpsertArgs<ExtArgs>>): Prisma__BoatPollOptionClient<$Result.GetResult<Prisma.$BoatPollOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BoatPollOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollOptionCountArgs} args - Arguments to filter BoatPollOptions to count.
     * @example
     * // Count the number of BoatPollOptions
     * const count = await prisma.boatPollOption.count({
     *   where: {
     *     // ... the filter for the BoatPollOptions we want to count
     *   }
     * })
    **/
    count<T extends BoatPollOptionCountArgs>(
      args?: Subset<T, BoatPollOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoatPollOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoatPollOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoatPollOptionAggregateArgs>(args: Subset<T, BoatPollOptionAggregateArgs>): Prisma.PrismaPromise<GetBoatPollOptionAggregateType<T>>

    /**
     * Group by BoatPollOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoatPollOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoatPollOptionGroupByArgs['orderBy'] }
        : { orderBy?: BoatPollOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoatPollOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoatPollOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BoatPollOption model
   */
  readonly fields: BoatPollOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoatPollOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoatPollOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poll<T extends BoatPollDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoatPollDefaultArgs<ExtArgs>>): Prisma__BoatPollClient<$Result.GetResult<Prisma.$BoatPollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votes<T extends BoatPollOption$votesArgs<ExtArgs> = {}>(args?: Subset<T, BoatPollOption$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoatPollVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BoatPollOption model
   */
  interface BoatPollOptionFieldRefs {
    readonly id: FieldRef<"BoatPollOption", 'String'>
    readonly pollId: FieldRef<"BoatPollOption", 'String'>
    readonly text: FieldRef<"BoatPollOption", 'String'>
    readonly order: FieldRef<"BoatPollOption", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BoatPollOption findUnique
   */
  export type BoatPollOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollOption
     */
    select?: BoatPollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollOption
     */
    omit?: BoatPollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollOptionInclude<ExtArgs> | null
    /**
     * Filter, which BoatPollOption to fetch.
     */
    where: BoatPollOptionWhereUniqueInput
  }

  /**
   * BoatPollOption findUniqueOrThrow
   */
  export type BoatPollOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollOption
     */
    select?: BoatPollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollOption
     */
    omit?: BoatPollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollOptionInclude<ExtArgs> | null
    /**
     * Filter, which BoatPollOption to fetch.
     */
    where: BoatPollOptionWhereUniqueInput
  }

  /**
   * BoatPollOption findFirst
   */
  export type BoatPollOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollOption
     */
    select?: BoatPollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollOption
     */
    omit?: BoatPollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollOptionInclude<ExtArgs> | null
    /**
     * Filter, which BoatPollOption to fetch.
     */
    where?: BoatPollOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoatPollOptions to fetch.
     */
    orderBy?: BoatPollOptionOrderByWithRelationInput | BoatPollOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoatPollOptions.
     */
    cursor?: BoatPollOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoatPollOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoatPollOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoatPollOptions.
     */
    distinct?: BoatPollOptionScalarFieldEnum | BoatPollOptionScalarFieldEnum[]
  }

  /**
   * BoatPollOption findFirstOrThrow
   */
  export type BoatPollOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollOption
     */
    select?: BoatPollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollOption
     */
    omit?: BoatPollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollOptionInclude<ExtArgs> | null
    /**
     * Filter, which BoatPollOption to fetch.
     */
    where?: BoatPollOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoatPollOptions to fetch.
     */
    orderBy?: BoatPollOptionOrderByWithRelationInput | BoatPollOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoatPollOptions.
     */
    cursor?: BoatPollOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoatPollOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoatPollOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoatPollOptions.
     */
    distinct?: BoatPollOptionScalarFieldEnum | BoatPollOptionScalarFieldEnum[]
  }

  /**
   * BoatPollOption findMany
   */
  export type BoatPollOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollOption
     */
    select?: BoatPollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollOption
     */
    omit?: BoatPollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollOptionInclude<ExtArgs> | null
    /**
     * Filter, which BoatPollOptions to fetch.
     */
    where?: BoatPollOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoatPollOptions to fetch.
     */
    orderBy?: BoatPollOptionOrderByWithRelationInput | BoatPollOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoatPollOptions.
     */
    cursor?: BoatPollOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoatPollOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoatPollOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoatPollOptions.
     */
    distinct?: BoatPollOptionScalarFieldEnum | BoatPollOptionScalarFieldEnum[]
  }

  /**
   * BoatPollOption create
   */
  export type BoatPollOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollOption
     */
    select?: BoatPollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollOption
     */
    omit?: BoatPollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a BoatPollOption.
     */
    data: XOR<BoatPollOptionCreateInput, BoatPollOptionUncheckedCreateInput>
  }

  /**
   * BoatPollOption createMany
   */
  export type BoatPollOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BoatPollOptions.
     */
    data: BoatPollOptionCreateManyInput | BoatPollOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BoatPollOption createManyAndReturn
   */
  export type BoatPollOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollOption
     */
    select?: BoatPollOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollOption
     */
    omit?: BoatPollOptionOmit<ExtArgs> | null
    /**
     * The data used to create many BoatPollOptions.
     */
    data: BoatPollOptionCreateManyInput | BoatPollOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BoatPollOption update
   */
  export type BoatPollOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollOption
     */
    select?: BoatPollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollOption
     */
    omit?: BoatPollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a BoatPollOption.
     */
    data: XOR<BoatPollOptionUpdateInput, BoatPollOptionUncheckedUpdateInput>
    /**
     * Choose, which BoatPollOption to update.
     */
    where: BoatPollOptionWhereUniqueInput
  }

  /**
   * BoatPollOption updateMany
   */
  export type BoatPollOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BoatPollOptions.
     */
    data: XOR<BoatPollOptionUpdateManyMutationInput, BoatPollOptionUncheckedUpdateManyInput>
    /**
     * Filter which BoatPollOptions to update
     */
    where?: BoatPollOptionWhereInput
    /**
     * Limit how many BoatPollOptions to update.
     */
    limit?: number
  }

  /**
   * BoatPollOption updateManyAndReturn
   */
  export type BoatPollOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollOption
     */
    select?: BoatPollOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollOption
     */
    omit?: BoatPollOptionOmit<ExtArgs> | null
    /**
     * The data used to update BoatPollOptions.
     */
    data: XOR<BoatPollOptionUpdateManyMutationInput, BoatPollOptionUncheckedUpdateManyInput>
    /**
     * Filter which BoatPollOptions to update
     */
    where?: BoatPollOptionWhereInput
    /**
     * Limit how many BoatPollOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BoatPollOption upsert
   */
  export type BoatPollOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollOption
     */
    select?: BoatPollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollOption
     */
    omit?: BoatPollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the BoatPollOption to update in case it exists.
     */
    where: BoatPollOptionWhereUniqueInput
    /**
     * In case the BoatPollOption found by the `where` argument doesn't exist, create a new BoatPollOption with this data.
     */
    create: XOR<BoatPollOptionCreateInput, BoatPollOptionUncheckedCreateInput>
    /**
     * In case the BoatPollOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoatPollOptionUpdateInput, BoatPollOptionUncheckedUpdateInput>
  }

  /**
   * BoatPollOption delete
   */
  export type BoatPollOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollOption
     */
    select?: BoatPollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollOption
     */
    omit?: BoatPollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollOptionInclude<ExtArgs> | null
    /**
     * Filter which BoatPollOption to delete.
     */
    where: BoatPollOptionWhereUniqueInput
  }

  /**
   * BoatPollOption deleteMany
   */
  export type BoatPollOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoatPollOptions to delete
     */
    where?: BoatPollOptionWhereInput
    /**
     * Limit how many BoatPollOptions to delete.
     */
    limit?: number
  }

  /**
   * BoatPollOption.votes
   */
  export type BoatPollOption$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollVote
     */
    select?: BoatPollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollVote
     */
    omit?: BoatPollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollVoteInclude<ExtArgs> | null
    where?: BoatPollVoteWhereInput
    orderBy?: BoatPollVoteOrderByWithRelationInput | BoatPollVoteOrderByWithRelationInput[]
    cursor?: BoatPollVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoatPollVoteScalarFieldEnum | BoatPollVoteScalarFieldEnum[]
  }

  /**
   * BoatPollOption without action
   */
  export type BoatPollOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollOption
     */
    select?: BoatPollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollOption
     */
    omit?: BoatPollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollOptionInclude<ExtArgs> | null
  }


  /**
   * Model BoatPollVote
   */

  export type AggregateBoatPollVote = {
    _count: BoatPollVoteCountAggregateOutputType | null
    _min: BoatPollVoteMinAggregateOutputType | null
    _max: BoatPollVoteMaxAggregateOutputType | null
  }

  export type BoatPollVoteMinAggregateOutputType = {
    id: string | null
    pollId: string | null
    optionId: string | null
    voterId: string | null
    createdAt: Date | null
  }

  export type BoatPollVoteMaxAggregateOutputType = {
    id: string | null
    pollId: string | null
    optionId: string | null
    voterId: string | null
    createdAt: Date | null
  }

  export type BoatPollVoteCountAggregateOutputType = {
    id: number
    pollId: number
    optionId: number
    voterId: number
    createdAt: number
    _all: number
  }


  export type BoatPollVoteMinAggregateInputType = {
    id?: true
    pollId?: true
    optionId?: true
    voterId?: true
    createdAt?: true
  }

  export type BoatPollVoteMaxAggregateInputType = {
    id?: true
    pollId?: true
    optionId?: true
    voterId?: true
    createdAt?: true
  }

  export type BoatPollVoteCountAggregateInputType = {
    id?: true
    pollId?: true
    optionId?: true
    voterId?: true
    createdAt?: true
    _all?: true
  }

  export type BoatPollVoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoatPollVote to aggregate.
     */
    where?: BoatPollVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoatPollVotes to fetch.
     */
    orderBy?: BoatPollVoteOrderByWithRelationInput | BoatPollVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoatPollVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoatPollVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoatPollVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoatPollVotes
    **/
    _count?: true | BoatPollVoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoatPollVoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoatPollVoteMaxAggregateInputType
  }

  export type GetBoatPollVoteAggregateType<T extends BoatPollVoteAggregateArgs> = {
        [P in keyof T & keyof AggregateBoatPollVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoatPollVote[P]>
      : GetScalarType<T[P], AggregateBoatPollVote[P]>
  }




  export type BoatPollVoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoatPollVoteWhereInput
    orderBy?: BoatPollVoteOrderByWithAggregationInput | BoatPollVoteOrderByWithAggregationInput[]
    by: BoatPollVoteScalarFieldEnum[] | BoatPollVoteScalarFieldEnum
    having?: BoatPollVoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoatPollVoteCountAggregateInputType | true
    _min?: BoatPollVoteMinAggregateInputType
    _max?: BoatPollVoteMaxAggregateInputType
  }

  export type BoatPollVoteGroupByOutputType = {
    id: string
    pollId: string
    optionId: string
    voterId: string
    createdAt: Date
    _count: BoatPollVoteCountAggregateOutputType | null
    _min: BoatPollVoteMinAggregateOutputType | null
    _max: BoatPollVoteMaxAggregateOutputType | null
  }

  type GetBoatPollVoteGroupByPayload<T extends BoatPollVoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoatPollVoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoatPollVoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoatPollVoteGroupByOutputType[P]>
            : GetScalarType<T[P], BoatPollVoteGroupByOutputType[P]>
        }
      >
    >


  export type BoatPollVoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pollId?: boolean
    optionId?: boolean
    voterId?: boolean
    createdAt?: boolean
    poll?: boolean | BoatPollDefaultArgs<ExtArgs>
    option?: boolean | BoatPollOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boatPollVote"]>

  export type BoatPollVoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pollId?: boolean
    optionId?: boolean
    voterId?: boolean
    createdAt?: boolean
    poll?: boolean | BoatPollDefaultArgs<ExtArgs>
    option?: boolean | BoatPollOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boatPollVote"]>

  export type BoatPollVoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pollId?: boolean
    optionId?: boolean
    voterId?: boolean
    createdAt?: boolean
    poll?: boolean | BoatPollDefaultArgs<ExtArgs>
    option?: boolean | BoatPollOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boatPollVote"]>

  export type BoatPollVoteSelectScalar = {
    id?: boolean
    pollId?: boolean
    optionId?: boolean
    voterId?: boolean
    createdAt?: boolean
  }

  export type BoatPollVoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pollId" | "optionId" | "voterId" | "createdAt", ExtArgs["result"]["boatPollVote"]>
  export type BoatPollVoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | BoatPollDefaultArgs<ExtArgs>
    option?: boolean | BoatPollOptionDefaultArgs<ExtArgs>
  }
  export type BoatPollVoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | BoatPollDefaultArgs<ExtArgs>
    option?: boolean | BoatPollOptionDefaultArgs<ExtArgs>
  }
  export type BoatPollVoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | BoatPollDefaultArgs<ExtArgs>
    option?: boolean | BoatPollOptionDefaultArgs<ExtArgs>
  }

  export type $BoatPollVotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BoatPollVote"
    objects: {
      poll: Prisma.$BoatPollPayload<ExtArgs>
      option: Prisma.$BoatPollOptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pollId: string
      optionId: string
      voterId: string
      createdAt: Date
    }, ExtArgs["result"]["boatPollVote"]>
    composites: {}
  }

  type BoatPollVoteGetPayload<S extends boolean | null | undefined | BoatPollVoteDefaultArgs> = $Result.GetResult<Prisma.$BoatPollVotePayload, S>

  type BoatPollVoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoatPollVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoatPollVoteCountAggregateInputType | true
    }

  export interface BoatPollVoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BoatPollVote'], meta: { name: 'BoatPollVote' } }
    /**
     * Find zero or one BoatPollVote that matches the filter.
     * @param {BoatPollVoteFindUniqueArgs} args - Arguments to find a BoatPollVote
     * @example
     * // Get one BoatPollVote
     * const boatPollVote = await prisma.boatPollVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoatPollVoteFindUniqueArgs>(args: SelectSubset<T, BoatPollVoteFindUniqueArgs<ExtArgs>>): Prisma__BoatPollVoteClient<$Result.GetResult<Prisma.$BoatPollVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BoatPollVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoatPollVoteFindUniqueOrThrowArgs} args - Arguments to find a BoatPollVote
     * @example
     * // Get one BoatPollVote
     * const boatPollVote = await prisma.boatPollVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoatPollVoteFindUniqueOrThrowArgs>(args: SelectSubset<T, BoatPollVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoatPollVoteClient<$Result.GetResult<Prisma.$BoatPollVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BoatPollVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollVoteFindFirstArgs} args - Arguments to find a BoatPollVote
     * @example
     * // Get one BoatPollVote
     * const boatPollVote = await prisma.boatPollVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoatPollVoteFindFirstArgs>(args?: SelectSubset<T, BoatPollVoteFindFirstArgs<ExtArgs>>): Prisma__BoatPollVoteClient<$Result.GetResult<Prisma.$BoatPollVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BoatPollVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollVoteFindFirstOrThrowArgs} args - Arguments to find a BoatPollVote
     * @example
     * // Get one BoatPollVote
     * const boatPollVote = await prisma.boatPollVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoatPollVoteFindFirstOrThrowArgs>(args?: SelectSubset<T, BoatPollVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoatPollVoteClient<$Result.GetResult<Prisma.$BoatPollVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BoatPollVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoatPollVotes
     * const boatPollVotes = await prisma.boatPollVote.findMany()
     * 
     * // Get first 10 BoatPollVotes
     * const boatPollVotes = await prisma.boatPollVote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boatPollVoteWithIdOnly = await prisma.boatPollVote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoatPollVoteFindManyArgs>(args?: SelectSubset<T, BoatPollVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoatPollVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BoatPollVote.
     * @param {BoatPollVoteCreateArgs} args - Arguments to create a BoatPollVote.
     * @example
     * // Create one BoatPollVote
     * const BoatPollVote = await prisma.boatPollVote.create({
     *   data: {
     *     // ... data to create a BoatPollVote
     *   }
     * })
     * 
     */
    create<T extends BoatPollVoteCreateArgs>(args: SelectSubset<T, BoatPollVoteCreateArgs<ExtArgs>>): Prisma__BoatPollVoteClient<$Result.GetResult<Prisma.$BoatPollVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BoatPollVotes.
     * @param {BoatPollVoteCreateManyArgs} args - Arguments to create many BoatPollVotes.
     * @example
     * // Create many BoatPollVotes
     * const boatPollVote = await prisma.boatPollVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoatPollVoteCreateManyArgs>(args?: SelectSubset<T, BoatPollVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BoatPollVotes and returns the data saved in the database.
     * @param {BoatPollVoteCreateManyAndReturnArgs} args - Arguments to create many BoatPollVotes.
     * @example
     * // Create many BoatPollVotes
     * const boatPollVote = await prisma.boatPollVote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BoatPollVotes and only return the `id`
     * const boatPollVoteWithIdOnly = await prisma.boatPollVote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoatPollVoteCreateManyAndReturnArgs>(args?: SelectSubset<T, BoatPollVoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoatPollVotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BoatPollVote.
     * @param {BoatPollVoteDeleteArgs} args - Arguments to delete one BoatPollVote.
     * @example
     * // Delete one BoatPollVote
     * const BoatPollVote = await prisma.boatPollVote.delete({
     *   where: {
     *     // ... filter to delete one BoatPollVote
     *   }
     * })
     * 
     */
    delete<T extends BoatPollVoteDeleteArgs>(args: SelectSubset<T, BoatPollVoteDeleteArgs<ExtArgs>>): Prisma__BoatPollVoteClient<$Result.GetResult<Prisma.$BoatPollVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BoatPollVote.
     * @param {BoatPollVoteUpdateArgs} args - Arguments to update one BoatPollVote.
     * @example
     * // Update one BoatPollVote
     * const boatPollVote = await prisma.boatPollVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoatPollVoteUpdateArgs>(args: SelectSubset<T, BoatPollVoteUpdateArgs<ExtArgs>>): Prisma__BoatPollVoteClient<$Result.GetResult<Prisma.$BoatPollVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BoatPollVotes.
     * @param {BoatPollVoteDeleteManyArgs} args - Arguments to filter BoatPollVotes to delete.
     * @example
     * // Delete a few BoatPollVotes
     * const { count } = await prisma.boatPollVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoatPollVoteDeleteManyArgs>(args?: SelectSubset<T, BoatPollVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoatPollVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoatPollVotes
     * const boatPollVote = await prisma.boatPollVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoatPollVoteUpdateManyArgs>(args: SelectSubset<T, BoatPollVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoatPollVotes and returns the data updated in the database.
     * @param {BoatPollVoteUpdateManyAndReturnArgs} args - Arguments to update many BoatPollVotes.
     * @example
     * // Update many BoatPollVotes
     * const boatPollVote = await prisma.boatPollVote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BoatPollVotes and only return the `id`
     * const boatPollVoteWithIdOnly = await prisma.boatPollVote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BoatPollVoteUpdateManyAndReturnArgs>(args: SelectSubset<T, BoatPollVoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoatPollVotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BoatPollVote.
     * @param {BoatPollVoteUpsertArgs} args - Arguments to update or create a BoatPollVote.
     * @example
     * // Update or create a BoatPollVote
     * const boatPollVote = await prisma.boatPollVote.upsert({
     *   create: {
     *     // ... data to create a BoatPollVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoatPollVote we want to update
     *   }
     * })
     */
    upsert<T extends BoatPollVoteUpsertArgs>(args: SelectSubset<T, BoatPollVoteUpsertArgs<ExtArgs>>): Prisma__BoatPollVoteClient<$Result.GetResult<Prisma.$BoatPollVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BoatPollVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollVoteCountArgs} args - Arguments to filter BoatPollVotes to count.
     * @example
     * // Count the number of BoatPollVotes
     * const count = await prisma.boatPollVote.count({
     *   where: {
     *     // ... the filter for the BoatPollVotes we want to count
     *   }
     * })
    **/
    count<T extends BoatPollVoteCountArgs>(
      args?: Subset<T, BoatPollVoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoatPollVoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoatPollVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoatPollVoteAggregateArgs>(args: Subset<T, BoatPollVoteAggregateArgs>): Prisma.PrismaPromise<GetBoatPollVoteAggregateType<T>>

    /**
     * Group by BoatPollVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoatPollVoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoatPollVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoatPollVoteGroupByArgs['orderBy'] }
        : { orderBy?: BoatPollVoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoatPollVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoatPollVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BoatPollVote model
   */
  readonly fields: BoatPollVoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoatPollVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoatPollVoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poll<T extends BoatPollDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoatPollDefaultArgs<ExtArgs>>): Prisma__BoatPollClient<$Result.GetResult<Prisma.$BoatPollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    option<T extends BoatPollOptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoatPollOptionDefaultArgs<ExtArgs>>): Prisma__BoatPollOptionClient<$Result.GetResult<Prisma.$BoatPollOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BoatPollVote model
   */
  interface BoatPollVoteFieldRefs {
    readonly id: FieldRef<"BoatPollVote", 'String'>
    readonly pollId: FieldRef<"BoatPollVote", 'String'>
    readonly optionId: FieldRef<"BoatPollVote", 'String'>
    readonly voterId: FieldRef<"BoatPollVote", 'String'>
    readonly createdAt: FieldRef<"BoatPollVote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BoatPollVote findUnique
   */
  export type BoatPollVoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollVote
     */
    select?: BoatPollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollVote
     */
    omit?: BoatPollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollVoteInclude<ExtArgs> | null
    /**
     * Filter, which BoatPollVote to fetch.
     */
    where: BoatPollVoteWhereUniqueInput
  }

  /**
   * BoatPollVote findUniqueOrThrow
   */
  export type BoatPollVoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollVote
     */
    select?: BoatPollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollVote
     */
    omit?: BoatPollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollVoteInclude<ExtArgs> | null
    /**
     * Filter, which BoatPollVote to fetch.
     */
    where: BoatPollVoteWhereUniqueInput
  }

  /**
   * BoatPollVote findFirst
   */
  export type BoatPollVoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollVote
     */
    select?: BoatPollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollVote
     */
    omit?: BoatPollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollVoteInclude<ExtArgs> | null
    /**
     * Filter, which BoatPollVote to fetch.
     */
    where?: BoatPollVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoatPollVotes to fetch.
     */
    orderBy?: BoatPollVoteOrderByWithRelationInput | BoatPollVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoatPollVotes.
     */
    cursor?: BoatPollVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoatPollVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoatPollVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoatPollVotes.
     */
    distinct?: BoatPollVoteScalarFieldEnum | BoatPollVoteScalarFieldEnum[]
  }

  /**
   * BoatPollVote findFirstOrThrow
   */
  export type BoatPollVoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollVote
     */
    select?: BoatPollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollVote
     */
    omit?: BoatPollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollVoteInclude<ExtArgs> | null
    /**
     * Filter, which BoatPollVote to fetch.
     */
    where?: BoatPollVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoatPollVotes to fetch.
     */
    orderBy?: BoatPollVoteOrderByWithRelationInput | BoatPollVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoatPollVotes.
     */
    cursor?: BoatPollVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoatPollVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoatPollVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoatPollVotes.
     */
    distinct?: BoatPollVoteScalarFieldEnum | BoatPollVoteScalarFieldEnum[]
  }

  /**
   * BoatPollVote findMany
   */
  export type BoatPollVoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollVote
     */
    select?: BoatPollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollVote
     */
    omit?: BoatPollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollVoteInclude<ExtArgs> | null
    /**
     * Filter, which BoatPollVotes to fetch.
     */
    where?: BoatPollVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoatPollVotes to fetch.
     */
    orderBy?: BoatPollVoteOrderByWithRelationInput | BoatPollVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoatPollVotes.
     */
    cursor?: BoatPollVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoatPollVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoatPollVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoatPollVotes.
     */
    distinct?: BoatPollVoteScalarFieldEnum | BoatPollVoteScalarFieldEnum[]
  }

  /**
   * BoatPollVote create
   */
  export type BoatPollVoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollVote
     */
    select?: BoatPollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollVote
     */
    omit?: BoatPollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollVoteInclude<ExtArgs> | null
    /**
     * The data needed to create a BoatPollVote.
     */
    data: XOR<BoatPollVoteCreateInput, BoatPollVoteUncheckedCreateInput>
  }

  /**
   * BoatPollVote createMany
   */
  export type BoatPollVoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BoatPollVotes.
     */
    data: BoatPollVoteCreateManyInput | BoatPollVoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BoatPollVote createManyAndReturn
   */
  export type BoatPollVoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollVote
     */
    select?: BoatPollVoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollVote
     */
    omit?: BoatPollVoteOmit<ExtArgs> | null
    /**
     * The data used to create many BoatPollVotes.
     */
    data: BoatPollVoteCreateManyInput | BoatPollVoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollVoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BoatPollVote update
   */
  export type BoatPollVoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollVote
     */
    select?: BoatPollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollVote
     */
    omit?: BoatPollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollVoteInclude<ExtArgs> | null
    /**
     * The data needed to update a BoatPollVote.
     */
    data: XOR<BoatPollVoteUpdateInput, BoatPollVoteUncheckedUpdateInput>
    /**
     * Choose, which BoatPollVote to update.
     */
    where: BoatPollVoteWhereUniqueInput
  }

  /**
   * BoatPollVote updateMany
   */
  export type BoatPollVoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BoatPollVotes.
     */
    data: XOR<BoatPollVoteUpdateManyMutationInput, BoatPollVoteUncheckedUpdateManyInput>
    /**
     * Filter which BoatPollVotes to update
     */
    where?: BoatPollVoteWhereInput
    /**
     * Limit how many BoatPollVotes to update.
     */
    limit?: number
  }

  /**
   * BoatPollVote updateManyAndReturn
   */
  export type BoatPollVoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollVote
     */
    select?: BoatPollVoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollVote
     */
    omit?: BoatPollVoteOmit<ExtArgs> | null
    /**
     * The data used to update BoatPollVotes.
     */
    data: XOR<BoatPollVoteUpdateManyMutationInput, BoatPollVoteUncheckedUpdateManyInput>
    /**
     * Filter which BoatPollVotes to update
     */
    where?: BoatPollVoteWhereInput
    /**
     * Limit how many BoatPollVotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollVoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BoatPollVote upsert
   */
  export type BoatPollVoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollVote
     */
    select?: BoatPollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollVote
     */
    omit?: BoatPollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollVoteInclude<ExtArgs> | null
    /**
     * The filter to search for the BoatPollVote to update in case it exists.
     */
    where: BoatPollVoteWhereUniqueInput
    /**
     * In case the BoatPollVote found by the `where` argument doesn't exist, create a new BoatPollVote with this data.
     */
    create: XOR<BoatPollVoteCreateInput, BoatPollVoteUncheckedCreateInput>
    /**
     * In case the BoatPollVote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoatPollVoteUpdateInput, BoatPollVoteUncheckedUpdateInput>
  }

  /**
   * BoatPollVote delete
   */
  export type BoatPollVoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollVote
     */
    select?: BoatPollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollVote
     */
    omit?: BoatPollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollVoteInclude<ExtArgs> | null
    /**
     * Filter which BoatPollVote to delete.
     */
    where: BoatPollVoteWhereUniqueInput
  }

  /**
   * BoatPollVote deleteMany
   */
  export type BoatPollVoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoatPollVotes to delete
     */
    where?: BoatPollVoteWhereInput
    /**
     * Limit how many BoatPollVotes to delete.
     */
    limit?: number
  }

  /**
   * BoatPollVote without action
   */
  export type BoatPollVoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoatPollVote
     */
    select?: BoatPollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoatPollVote
     */
    omit?: BoatPollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoatPollVoteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BoatPollScalarFieldEnum: {
    id: 'id',
    title: 'title',
    allowMultiple: 'allowMultiple',
    isAnonymous: 'isAnonymous',
    resultVisibility: 'resultVisibility',
    endDate: 'endDate',
    maxParticipants: 'maxParticipants',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BoatPollScalarFieldEnum = (typeof BoatPollScalarFieldEnum)[keyof typeof BoatPollScalarFieldEnum]


  export const BoatPollOptionScalarFieldEnum: {
    id: 'id',
    pollId: 'pollId',
    text: 'text',
    order: 'order'
  };

  export type BoatPollOptionScalarFieldEnum = (typeof BoatPollOptionScalarFieldEnum)[keyof typeof BoatPollOptionScalarFieldEnum]


  export const BoatPollVoteScalarFieldEnum: {
    id: 'id',
    pollId: 'pollId',
    optionId: 'optionId',
    voterId: 'voterId',
    createdAt: 'createdAt'
  };

  export type BoatPollVoteScalarFieldEnum = (typeof BoatPollVoteScalarFieldEnum)[keyof typeof BoatPollVoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BoatPollWhereInput = {
    AND?: BoatPollWhereInput | BoatPollWhereInput[]
    OR?: BoatPollWhereInput[]
    NOT?: BoatPollWhereInput | BoatPollWhereInput[]
    id?: StringFilter<"BoatPoll"> | string
    title?: StringFilter<"BoatPoll"> | string
    allowMultiple?: BoolFilter<"BoatPoll"> | boolean
    isAnonymous?: BoolFilter<"BoatPoll"> | boolean
    resultVisibility?: StringFilter<"BoatPoll"> | string
    endDate?: DateTimeNullableFilter<"BoatPoll"> | Date | string | null
    maxParticipants?: IntNullableFilter<"BoatPoll"> | number | null
    createdById?: StringFilter<"BoatPoll"> | string
    createdAt?: DateTimeFilter<"BoatPoll"> | Date | string
    updatedAt?: DateTimeFilter<"BoatPoll"> | Date | string
    options?: BoatPollOptionListRelationFilter
    votes?: BoatPollVoteListRelationFilter
  }

  export type BoatPollOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    allowMultiple?: SortOrder
    isAnonymous?: SortOrder
    resultVisibility?: SortOrder
    endDate?: SortOrderInput | SortOrder
    maxParticipants?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    options?: BoatPollOptionOrderByRelationAggregateInput
    votes?: BoatPollVoteOrderByRelationAggregateInput
  }

  export type BoatPollWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BoatPollWhereInput | BoatPollWhereInput[]
    OR?: BoatPollWhereInput[]
    NOT?: BoatPollWhereInput | BoatPollWhereInput[]
    title?: StringFilter<"BoatPoll"> | string
    allowMultiple?: BoolFilter<"BoatPoll"> | boolean
    isAnonymous?: BoolFilter<"BoatPoll"> | boolean
    resultVisibility?: StringFilter<"BoatPoll"> | string
    endDate?: DateTimeNullableFilter<"BoatPoll"> | Date | string | null
    maxParticipants?: IntNullableFilter<"BoatPoll"> | number | null
    createdById?: StringFilter<"BoatPoll"> | string
    createdAt?: DateTimeFilter<"BoatPoll"> | Date | string
    updatedAt?: DateTimeFilter<"BoatPoll"> | Date | string
    options?: BoatPollOptionListRelationFilter
    votes?: BoatPollVoteListRelationFilter
  }, "id">

  export type BoatPollOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    allowMultiple?: SortOrder
    isAnonymous?: SortOrder
    resultVisibility?: SortOrder
    endDate?: SortOrderInput | SortOrder
    maxParticipants?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BoatPollCountOrderByAggregateInput
    _avg?: BoatPollAvgOrderByAggregateInput
    _max?: BoatPollMaxOrderByAggregateInput
    _min?: BoatPollMinOrderByAggregateInput
    _sum?: BoatPollSumOrderByAggregateInput
  }

  export type BoatPollScalarWhereWithAggregatesInput = {
    AND?: BoatPollScalarWhereWithAggregatesInput | BoatPollScalarWhereWithAggregatesInput[]
    OR?: BoatPollScalarWhereWithAggregatesInput[]
    NOT?: BoatPollScalarWhereWithAggregatesInput | BoatPollScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BoatPoll"> | string
    title?: StringWithAggregatesFilter<"BoatPoll"> | string
    allowMultiple?: BoolWithAggregatesFilter<"BoatPoll"> | boolean
    isAnonymous?: BoolWithAggregatesFilter<"BoatPoll"> | boolean
    resultVisibility?: StringWithAggregatesFilter<"BoatPoll"> | string
    endDate?: DateTimeNullableWithAggregatesFilter<"BoatPoll"> | Date | string | null
    maxParticipants?: IntNullableWithAggregatesFilter<"BoatPoll"> | number | null
    createdById?: StringWithAggregatesFilter<"BoatPoll"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BoatPoll"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BoatPoll"> | Date | string
  }

  export type BoatPollOptionWhereInput = {
    AND?: BoatPollOptionWhereInput | BoatPollOptionWhereInput[]
    OR?: BoatPollOptionWhereInput[]
    NOT?: BoatPollOptionWhereInput | BoatPollOptionWhereInput[]
    id?: StringFilter<"BoatPollOption"> | string
    pollId?: StringFilter<"BoatPollOption"> | string
    text?: StringFilter<"BoatPollOption"> | string
    order?: IntFilter<"BoatPollOption"> | number
    poll?: XOR<BoatPollScalarRelationFilter, BoatPollWhereInput>
    votes?: BoatPollVoteListRelationFilter
  }

  export type BoatPollOptionOrderByWithRelationInput = {
    id?: SortOrder
    pollId?: SortOrder
    text?: SortOrder
    order?: SortOrder
    poll?: BoatPollOrderByWithRelationInput
    votes?: BoatPollVoteOrderByRelationAggregateInput
  }

  export type BoatPollOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BoatPollOptionWhereInput | BoatPollOptionWhereInput[]
    OR?: BoatPollOptionWhereInput[]
    NOT?: BoatPollOptionWhereInput | BoatPollOptionWhereInput[]
    pollId?: StringFilter<"BoatPollOption"> | string
    text?: StringFilter<"BoatPollOption"> | string
    order?: IntFilter<"BoatPollOption"> | number
    poll?: XOR<BoatPollScalarRelationFilter, BoatPollWhereInput>
    votes?: BoatPollVoteListRelationFilter
  }, "id">

  export type BoatPollOptionOrderByWithAggregationInput = {
    id?: SortOrder
    pollId?: SortOrder
    text?: SortOrder
    order?: SortOrder
    _count?: BoatPollOptionCountOrderByAggregateInput
    _avg?: BoatPollOptionAvgOrderByAggregateInput
    _max?: BoatPollOptionMaxOrderByAggregateInput
    _min?: BoatPollOptionMinOrderByAggregateInput
    _sum?: BoatPollOptionSumOrderByAggregateInput
  }

  export type BoatPollOptionScalarWhereWithAggregatesInput = {
    AND?: BoatPollOptionScalarWhereWithAggregatesInput | BoatPollOptionScalarWhereWithAggregatesInput[]
    OR?: BoatPollOptionScalarWhereWithAggregatesInput[]
    NOT?: BoatPollOptionScalarWhereWithAggregatesInput | BoatPollOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BoatPollOption"> | string
    pollId?: StringWithAggregatesFilter<"BoatPollOption"> | string
    text?: StringWithAggregatesFilter<"BoatPollOption"> | string
    order?: IntWithAggregatesFilter<"BoatPollOption"> | number
  }

  export type BoatPollVoteWhereInput = {
    AND?: BoatPollVoteWhereInput | BoatPollVoteWhereInput[]
    OR?: BoatPollVoteWhereInput[]
    NOT?: BoatPollVoteWhereInput | BoatPollVoteWhereInput[]
    id?: StringFilter<"BoatPollVote"> | string
    pollId?: StringFilter<"BoatPollVote"> | string
    optionId?: StringFilter<"BoatPollVote"> | string
    voterId?: StringFilter<"BoatPollVote"> | string
    createdAt?: DateTimeFilter<"BoatPollVote"> | Date | string
    poll?: XOR<BoatPollScalarRelationFilter, BoatPollWhereInput>
    option?: XOR<BoatPollOptionScalarRelationFilter, BoatPollOptionWhereInput>
  }

  export type BoatPollVoteOrderByWithRelationInput = {
    id?: SortOrder
    pollId?: SortOrder
    optionId?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
    poll?: BoatPollOrderByWithRelationInput
    option?: BoatPollOptionOrderByWithRelationInput
  }

  export type BoatPollVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pollId_optionId_voterId?: BoatPollVotePollIdOptionIdVoterIdCompoundUniqueInput
    AND?: BoatPollVoteWhereInput | BoatPollVoteWhereInput[]
    OR?: BoatPollVoteWhereInput[]
    NOT?: BoatPollVoteWhereInput | BoatPollVoteWhereInput[]
    pollId?: StringFilter<"BoatPollVote"> | string
    optionId?: StringFilter<"BoatPollVote"> | string
    voterId?: StringFilter<"BoatPollVote"> | string
    createdAt?: DateTimeFilter<"BoatPollVote"> | Date | string
    poll?: XOR<BoatPollScalarRelationFilter, BoatPollWhereInput>
    option?: XOR<BoatPollOptionScalarRelationFilter, BoatPollOptionWhereInput>
  }, "id" | "pollId_optionId_voterId">

  export type BoatPollVoteOrderByWithAggregationInput = {
    id?: SortOrder
    pollId?: SortOrder
    optionId?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
    _count?: BoatPollVoteCountOrderByAggregateInput
    _max?: BoatPollVoteMaxOrderByAggregateInput
    _min?: BoatPollVoteMinOrderByAggregateInput
  }

  export type BoatPollVoteScalarWhereWithAggregatesInput = {
    AND?: BoatPollVoteScalarWhereWithAggregatesInput | BoatPollVoteScalarWhereWithAggregatesInput[]
    OR?: BoatPollVoteScalarWhereWithAggregatesInput[]
    NOT?: BoatPollVoteScalarWhereWithAggregatesInput | BoatPollVoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BoatPollVote"> | string
    pollId?: StringWithAggregatesFilter<"BoatPollVote"> | string
    optionId?: StringWithAggregatesFilter<"BoatPollVote"> | string
    voterId?: StringWithAggregatesFilter<"BoatPollVote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BoatPollVote"> | Date | string
  }

  export type BoatPollCreateInput = {
    id?: string
    title: string
    allowMultiple?: boolean
    isAnonymous?: boolean
    resultVisibility?: string
    endDate?: Date | string | null
    maxParticipants?: number | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: BoatPollOptionCreateNestedManyWithoutPollInput
    votes?: BoatPollVoteCreateNestedManyWithoutPollInput
  }

  export type BoatPollUncheckedCreateInput = {
    id?: string
    title: string
    allowMultiple?: boolean
    isAnonymous?: boolean
    resultVisibility?: string
    endDate?: Date | string | null
    maxParticipants?: number | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: BoatPollOptionUncheckedCreateNestedManyWithoutPollInput
    votes?: BoatPollVoteUncheckedCreateNestedManyWithoutPollInput
  }

  export type BoatPollUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    allowMultiple?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    resultVisibility?: StringFieldUpdateOperationsInput | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: BoatPollOptionUpdateManyWithoutPollNestedInput
    votes?: BoatPollVoteUpdateManyWithoutPollNestedInput
  }

  export type BoatPollUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    allowMultiple?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    resultVisibility?: StringFieldUpdateOperationsInput | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: BoatPollOptionUncheckedUpdateManyWithoutPollNestedInput
    votes?: BoatPollVoteUncheckedUpdateManyWithoutPollNestedInput
  }

  export type BoatPollCreateManyInput = {
    id?: string
    title: string
    allowMultiple?: boolean
    isAnonymous?: boolean
    resultVisibility?: string
    endDate?: Date | string | null
    maxParticipants?: number | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoatPollUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    allowMultiple?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    resultVisibility?: StringFieldUpdateOperationsInput | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoatPollUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    allowMultiple?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    resultVisibility?: StringFieldUpdateOperationsInput | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoatPollOptionCreateInput = {
    id?: string
    text: string
    order?: number
    poll: BoatPollCreateNestedOneWithoutOptionsInput
    votes?: BoatPollVoteCreateNestedManyWithoutOptionInput
  }

  export type BoatPollOptionUncheckedCreateInput = {
    id?: string
    pollId: string
    text: string
    order?: number
    votes?: BoatPollVoteUncheckedCreateNestedManyWithoutOptionInput
  }

  export type BoatPollOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    poll?: BoatPollUpdateOneRequiredWithoutOptionsNestedInput
    votes?: BoatPollVoteUpdateManyWithoutOptionNestedInput
  }

  export type BoatPollOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    votes?: BoatPollVoteUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type BoatPollOptionCreateManyInput = {
    id?: string
    pollId: string
    text: string
    order?: number
  }

  export type BoatPollOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type BoatPollOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type BoatPollVoteCreateInput = {
    id?: string
    voterId: string
    createdAt?: Date | string
    poll: BoatPollCreateNestedOneWithoutVotesInput
    option: BoatPollOptionCreateNestedOneWithoutVotesInput
  }

  export type BoatPollVoteUncheckedCreateInput = {
    id?: string
    pollId: string
    optionId: string
    voterId: string
    createdAt?: Date | string
  }

  export type BoatPollVoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poll?: BoatPollUpdateOneRequiredWithoutVotesNestedInput
    option?: BoatPollOptionUpdateOneRequiredWithoutVotesNestedInput
  }

  export type BoatPollVoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoatPollVoteCreateManyInput = {
    id?: string
    pollId: string
    optionId: string
    voterId: string
    createdAt?: Date | string
  }

  export type BoatPollVoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoatPollVoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoatPollOptionListRelationFilter = {
    every?: BoatPollOptionWhereInput
    some?: BoatPollOptionWhereInput
    none?: BoatPollOptionWhereInput
  }

  export type BoatPollVoteListRelationFilter = {
    every?: BoatPollVoteWhereInput
    some?: BoatPollVoteWhereInput
    none?: BoatPollVoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BoatPollOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoatPollVoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoatPollCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    allowMultiple?: SortOrder
    isAnonymous?: SortOrder
    resultVisibility?: SortOrder
    endDate?: SortOrder
    maxParticipants?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoatPollAvgOrderByAggregateInput = {
    maxParticipants?: SortOrder
  }

  export type BoatPollMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    allowMultiple?: SortOrder
    isAnonymous?: SortOrder
    resultVisibility?: SortOrder
    endDate?: SortOrder
    maxParticipants?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoatPollMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    allowMultiple?: SortOrder
    isAnonymous?: SortOrder
    resultVisibility?: SortOrder
    endDate?: SortOrder
    maxParticipants?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoatPollSumOrderByAggregateInput = {
    maxParticipants?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoatPollScalarRelationFilter = {
    is?: BoatPollWhereInput
    isNot?: BoatPollWhereInput
  }

  export type BoatPollOptionCountOrderByAggregateInput = {
    id?: SortOrder
    pollId?: SortOrder
    text?: SortOrder
    order?: SortOrder
  }

  export type BoatPollOptionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BoatPollOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    pollId?: SortOrder
    text?: SortOrder
    order?: SortOrder
  }

  export type BoatPollOptionMinOrderByAggregateInput = {
    id?: SortOrder
    pollId?: SortOrder
    text?: SortOrder
    order?: SortOrder
  }

  export type BoatPollOptionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoatPollOptionScalarRelationFilter = {
    is?: BoatPollOptionWhereInput
    isNot?: BoatPollOptionWhereInput
  }

  export type BoatPollVotePollIdOptionIdVoterIdCompoundUniqueInput = {
    pollId: string
    optionId: string
    voterId: string
  }

  export type BoatPollVoteCountOrderByAggregateInput = {
    id?: SortOrder
    pollId?: SortOrder
    optionId?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoatPollVoteMaxOrderByAggregateInput = {
    id?: SortOrder
    pollId?: SortOrder
    optionId?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoatPollVoteMinOrderByAggregateInput = {
    id?: SortOrder
    pollId?: SortOrder
    optionId?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoatPollOptionCreateNestedManyWithoutPollInput = {
    create?: XOR<BoatPollOptionCreateWithoutPollInput, BoatPollOptionUncheckedCreateWithoutPollInput> | BoatPollOptionCreateWithoutPollInput[] | BoatPollOptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: BoatPollOptionCreateOrConnectWithoutPollInput | BoatPollOptionCreateOrConnectWithoutPollInput[]
    createMany?: BoatPollOptionCreateManyPollInputEnvelope
    connect?: BoatPollOptionWhereUniqueInput | BoatPollOptionWhereUniqueInput[]
  }

  export type BoatPollVoteCreateNestedManyWithoutPollInput = {
    create?: XOR<BoatPollVoteCreateWithoutPollInput, BoatPollVoteUncheckedCreateWithoutPollInput> | BoatPollVoteCreateWithoutPollInput[] | BoatPollVoteUncheckedCreateWithoutPollInput[]
    connectOrCreate?: BoatPollVoteCreateOrConnectWithoutPollInput | BoatPollVoteCreateOrConnectWithoutPollInput[]
    createMany?: BoatPollVoteCreateManyPollInputEnvelope
    connect?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
  }

  export type BoatPollOptionUncheckedCreateNestedManyWithoutPollInput = {
    create?: XOR<BoatPollOptionCreateWithoutPollInput, BoatPollOptionUncheckedCreateWithoutPollInput> | BoatPollOptionCreateWithoutPollInput[] | BoatPollOptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: BoatPollOptionCreateOrConnectWithoutPollInput | BoatPollOptionCreateOrConnectWithoutPollInput[]
    createMany?: BoatPollOptionCreateManyPollInputEnvelope
    connect?: BoatPollOptionWhereUniqueInput | BoatPollOptionWhereUniqueInput[]
  }

  export type BoatPollVoteUncheckedCreateNestedManyWithoutPollInput = {
    create?: XOR<BoatPollVoteCreateWithoutPollInput, BoatPollVoteUncheckedCreateWithoutPollInput> | BoatPollVoteCreateWithoutPollInput[] | BoatPollVoteUncheckedCreateWithoutPollInput[]
    connectOrCreate?: BoatPollVoteCreateOrConnectWithoutPollInput | BoatPollVoteCreateOrConnectWithoutPollInput[]
    createMany?: BoatPollVoteCreateManyPollInputEnvelope
    connect?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoatPollOptionUpdateManyWithoutPollNestedInput = {
    create?: XOR<BoatPollOptionCreateWithoutPollInput, BoatPollOptionUncheckedCreateWithoutPollInput> | BoatPollOptionCreateWithoutPollInput[] | BoatPollOptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: BoatPollOptionCreateOrConnectWithoutPollInput | BoatPollOptionCreateOrConnectWithoutPollInput[]
    upsert?: BoatPollOptionUpsertWithWhereUniqueWithoutPollInput | BoatPollOptionUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: BoatPollOptionCreateManyPollInputEnvelope
    set?: BoatPollOptionWhereUniqueInput | BoatPollOptionWhereUniqueInput[]
    disconnect?: BoatPollOptionWhereUniqueInput | BoatPollOptionWhereUniqueInput[]
    delete?: BoatPollOptionWhereUniqueInput | BoatPollOptionWhereUniqueInput[]
    connect?: BoatPollOptionWhereUniqueInput | BoatPollOptionWhereUniqueInput[]
    update?: BoatPollOptionUpdateWithWhereUniqueWithoutPollInput | BoatPollOptionUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: BoatPollOptionUpdateManyWithWhereWithoutPollInput | BoatPollOptionUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: BoatPollOptionScalarWhereInput | BoatPollOptionScalarWhereInput[]
  }

  export type BoatPollVoteUpdateManyWithoutPollNestedInput = {
    create?: XOR<BoatPollVoteCreateWithoutPollInput, BoatPollVoteUncheckedCreateWithoutPollInput> | BoatPollVoteCreateWithoutPollInput[] | BoatPollVoteUncheckedCreateWithoutPollInput[]
    connectOrCreate?: BoatPollVoteCreateOrConnectWithoutPollInput | BoatPollVoteCreateOrConnectWithoutPollInput[]
    upsert?: BoatPollVoteUpsertWithWhereUniqueWithoutPollInput | BoatPollVoteUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: BoatPollVoteCreateManyPollInputEnvelope
    set?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
    disconnect?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
    delete?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
    connect?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
    update?: BoatPollVoteUpdateWithWhereUniqueWithoutPollInput | BoatPollVoteUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: BoatPollVoteUpdateManyWithWhereWithoutPollInput | BoatPollVoteUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: BoatPollVoteScalarWhereInput | BoatPollVoteScalarWhereInput[]
  }

  export type BoatPollOptionUncheckedUpdateManyWithoutPollNestedInput = {
    create?: XOR<BoatPollOptionCreateWithoutPollInput, BoatPollOptionUncheckedCreateWithoutPollInput> | BoatPollOptionCreateWithoutPollInput[] | BoatPollOptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: BoatPollOptionCreateOrConnectWithoutPollInput | BoatPollOptionCreateOrConnectWithoutPollInput[]
    upsert?: BoatPollOptionUpsertWithWhereUniqueWithoutPollInput | BoatPollOptionUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: BoatPollOptionCreateManyPollInputEnvelope
    set?: BoatPollOptionWhereUniqueInput | BoatPollOptionWhereUniqueInput[]
    disconnect?: BoatPollOptionWhereUniqueInput | BoatPollOptionWhereUniqueInput[]
    delete?: BoatPollOptionWhereUniqueInput | BoatPollOptionWhereUniqueInput[]
    connect?: BoatPollOptionWhereUniqueInput | BoatPollOptionWhereUniqueInput[]
    update?: BoatPollOptionUpdateWithWhereUniqueWithoutPollInput | BoatPollOptionUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: BoatPollOptionUpdateManyWithWhereWithoutPollInput | BoatPollOptionUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: BoatPollOptionScalarWhereInput | BoatPollOptionScalarWhereInput[]
  }

  export type BoatPollVoteUncheckedUpdateManyWithoutPollNestedInput = {
    create?: XOR<BoatPollVoteCreateWithoutPollInput, BoatPollVoteUncheckedCreateWithoutPollInput> | BoatPollVoteCreateWithoutPollInput[] | BoatPollVoteUncheckedCreateWithoutPollInput[]
    connectOrCreate?: BoatPollVoteCreateOrConnectWithoutPollInput | BoatPollVoteCreateOrConnectWithoutPollInput[]
    upsert?: BoatPollVoteUpsertWithWhereUniqueWithoutPollInput | BoatPollVoteUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: BoatPollVoteCreateManyPollInputEnvelope
    set?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
    disconnect?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
    delete?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
    connect?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
    update?: BoatPollVoteUpdateWithWhereUniqueWithoutPollInput | BoatPollVoteUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: BoatPollVoteUpdateManyWithWhereWithoutPollInput | BoatPollVoteUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: BoatPollVoteScalarWhereInput | BoatPollVoteScalarWhereInput[]
  }

  export type BoatPollCreateNestedOneWithoutOptionsInput = {
    create?: XOR<BoatPollCreateWithoutOptionsInput, BoatPollUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: BoatPollCreateOrConnectWithoutOptionsInput
    connect?: BoatPollWhereUniqueInput
  }

  export type BoatPollVoteCreateNestedManyWithoutOptionInput = {
    create?: XOR<BoatPollVoteCreateWithoutOptionInput, BoatPollVoteUncheckedCreateWithoutOptionInput> | BoatPollVoteCreateWithoutOptionInput[] | BoatPollVoteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: BoatPollVoteCreateOrConnectWithoutOptionInput | BoatPollVoteCreateOrConnectWithoutOptionInput[]
    createMany?: BoatPollVoteCreateManyOptionInputEnvelope
    connect?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
  }

  export type BoatPollVoteUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<BoatPollVoteCreateWithoutOptionInput, BoatPollVoteUncheckedCreateWithoutOptionInput> | BoatPollVoteCreateWithoutOptionInput[] | BoatPollVoteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: BoatPollVoteCreateOrConnectWithoutOptionInput | BoatPollVoteCreateOrConnectWithoutOptionInput[]
    createMany?: BoatPollVoteCreateManyOptionInputEnvelope
    connect?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoatPollUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<BoatPollCreateWithoutOptionsInput, BoatPollUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: BoatPollCreateOrConnectWithoutOptionsInput
    upsert?: BoatPollUpsertWithoutOptionsInput
    connect?: BoatPollWhereUniqueInput
    update?: XOR<XOR<BoatPollUpdateToOneWithWhereWithoutOptionsInput, BoatPollUpdateWithoutOptionsInput>, BoatPollUncheckedUpdateWithoutOptionsInput>
  }

  export type BoatPollVoteUpdateManyWithoutOptionNestedInput = {
    create?: XOR<BoatPollVoteCreateWithoutOptionInput, BoatPollVoteUncheckedCreateWithoutOptionInput> | BoatPollVoteCreateWithoutOptionInput[] | BoatPollVoteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: BoatPollVoteCreateOrConnectWithoutOptionInput | BoatPollVoteCreateOrConnectWithoutOptionInput[]
    upsert?: BoatPollVoteUpsertWithWhereUniqueWithoutOptionInput | BoatPollVoteUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: BoatPollVoteCreateManyOptionInputEnvelope
    set?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
    disconnect?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
    delete?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
    connect?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
    update?: BoatPollVoteUpdateWithWhereUniqueWithoutOptionInput | BoatPollVoteUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: BoatPollVoteUpdateManyWithWhereWithoutOptionInput | BoatPollVoteUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: BoatPollVoteScalarWhereInput | BoatPollVoteScalarWhereInput[]
  }

  export type BoatPollVoteUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<BoatPollVoteCreateWithoutOptionInput, BoatPollVoteUncheckedCreateWithoutOptionInput> | BoatPollVoteCreateWithoutOptionInput[] | BoatPollVoteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: BoatPollVoteCreateOrConnectWithoutOptionInput | BoatPollVoteCreateOrConnectWithoutOptionInput[]
    upsert?: BoatPollVoteUpsertWithWhereUniqueWithoutOptionInput | BoatPollVoteUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: BoatPollVoteCreateManyOptionInputEnvelope
    set?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
    disconnect?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
    delete?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
    connect?: BoatPollVoteWhereUniqueInput | BoatPollVoteWhereUniqueInput[]
    update?: BoatPollVoteUpdateWithWhereUniqueWithoutOptionInput | BoatPollVoteUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: BoatPollVoteUpdateManyWithWhereWithoutOptionInput | BoatPollVoteUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: BoatPollVoteScalarWhereInput | BoatPollVoteScalarWhereInput[]
  }

  export type BoatPollCreateNestedOneWithoutVotesInput = {
    create?: XOR<BoatPollCreateWithoutVotesInput, BoatPollUncheckedCreateWithoutVotesInput>
    connectOrCreate?: BoatPollCreateOrConnectWithoutVotesInput
    connect?: BoatPollWhereUniqueInput
  }

  export type BoatPollOptionCreateNestedOneWithoutVotesInput = {
    create?: XOR<BoatPollOptionCreateWithoutVotesInput, BoatPollOptionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: BoatPollOptionCreateOrConnectWithoutVotesInput
    connect?: BoatPollOptionWhereUniqueInput
  }

  export type BoatPollUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<BoatPollCreateWithoutVotesInput, BoatPollUncheckedCreateWithoutVotesInput>
    connectOrCreate?: BoatPollCreateOrConnectWithoutVotesInput
    upsert?: BoatPollUpsertWithoutVotesInput
    connect?: BoatPollWhereUniqueInput
    update?: XOR<XOR<BoatPollUpdateToOneWithWhereWithoutVotesInput, BoatPollUpdateWithoutVotesInput>, BoatPollUncheckedUpdateWithoutVotesInput>
  }

  export type BoatPollOptionUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<BoatPollOptionCreateWithoutVotesInput, BoatPollOptionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: BoatPollOptionCreateOrConnectWithoutVotesInput
    upsert?: BoatPollOptionUpsertWithoutVotesInput
    connect?: BoatPollOptionWhereUniqueInput
    update?: XOR<XOR<BoatPollOptionUpdateToOneWithWhereWithoutVotesInput, BoatPollOptionUpdateWithoutVotesInput>, BoatPollOptionUncheckedUpdateWithoutVotesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoatPollOptionCreateWithoutPollInput = {
    id?: string
    text: string
    order?: number
    votes?: BoatPollVoteCreateNestedManyWithoutOptionInput
  }

  export type BoatPollOptionUncheckedCreateWithoutPollInput = {
    id?: string
    text: string
    order?: number
    votes?: BoatPollVoteUncheckedCreateNestedManyWithoutOptionInput
  }

  export type BoatPollOptionCreateOrConnectWithoutPollInput = {
    where: BoatPollOptionWhereUniqueInput
    create: XOR<BoatPollOptionCreateWithoutPollInput, BoatPollOptionUncheckedCreateWithoutPollInput>
  }

  export type BoatPollOptionCreateManyPollInputEnvelope = {
    data: BoatPollOptionCreateManyPollInput | BoatPollOptionCreateManyPollInput[]
    skipDuplicates?: boolean
  }

  export type BoatPollVoteCreateWithoutPollInput = {
    id?: string
    voterId: string
    createdAt?: Date | string
    option: BoatPollOptionCreateNestedOneWithoutVotesInput
  }

  export type BoatPollVoteUncheckedCreateWithoutPollInput = {
    id?: string
    optionId: string
    voterId: string
    createdAt?: Date | string
  }

  export type BoatPollVoteCreateOrConnectWithoutPollInput = {
    where: BoatPollVoteWhereUniqueInput
    create: XOR<BoatPollVoteCreateWithoutPollInput, BoatPollVoteUncheckedCreateWithoutPollInput>
  }

  export type BoatPollVoteCreateManyPollInputEnvelope = {
    data: BoatPollVoteCreateManyPollInput | BoatPollVoteCreateManyPollInput[]
    skipDuplicates?: boolean
  }

  export type BoatPollOptionUpsertWithWhereUniqueWithoutPollInput = {
    where: BoatPollOptionWhereUniqueInput
    update: XOR<BoatPollOptionUpdateWithoutPollInput, BoatPollOptionUncheckedUpdateWithoutPollInput>
    create: XOR<BoatPollOptionCreateWithoutPollInput, BoatPollOptionUncheckedCreateWithoutPollInput>
  }

  export type BoatPollOptionUpdateWithWhereUniqueWithoutPollInput = {
    where: BoatPollOptionWhereUniqueInput
    data: XOR<BoatPollOptionUpdateWithoutPollInput, BoatPollOptionUncheckedUpdateWithoutPollInput>
  }

  export type BoatPollOptionUpdateManyWithWhereWithoutPollInput = {
    where: BoatPollOptionScalarWhereInput
    data: XOR<BoatPollOptionUpdateManyMutationInput, BoatPollOptionUncheckedUpdateManyWithoutPollInput>
  }

  export type BoatPollOptionScalarWhereInput = {
    AND?: BoatPollOptionScalarWhereInput | BoatPollOptionScalarWhereInput[]
    OR?: BoatPollOptionScalarWhereInput[]
    NOT?: BoatPollOptionScalarWhereInput | BoatPollOptionScalarWhereInput[]
    id?: StringFilter<"BoatPollOption"> | string
    pollId?: StringFilter<"BoatPollOption"> | string
    text?: StringFilter<"BoatPollOption"> | string
    order?: IntFilter<"BoatPollOption"> | number
  }

  export type BoatPollVoteUpsertWithWhereUniqueWithoutPollInput = {
    where: BoatPollVoteWhereUniqueInput
    update: XOR<BoatPollVoteUpdateWithoutPollInput, BoatPollVoteUncheckedUpdateWithoutPollInput>
    create: XOR<BoatPollVoteCreateWithoutPollInput, BoatPollVoteUncheckedCreateWithoutPollInput>
  }

  export type BoatPollVoteUpdateWithWhereUniqueWithoutPollInput = {
    where: BoatPollVoteWhereUniqueInput
    data: XOR<BoatPollVoteUpdateWithoutPollInput, BoatPollVoteUncheckedUpdateWithoutPollInput>
  }

  export type BoatPollVoteUpdateManyWithWhereWithoutPollInput = {
    where: BoatPollVoteScalarWhereInput
    data: XOR<BoatPollVoteUpdateManyMutationInput, BoatPollVoteUncheckedUpdateManyWithoutPollInput>
  }

  export type BoatPollVoteScalarWhereInput = {
    AND?: BoatPollVoteScalarWhereInput | BoatPollVoteScalarWhereInput[]
    OR?: BoatPollVoteScalarWhereInput[]
    NOT?: BoatPollVoteScalarWhereInput | BoatPollVoteScalarWhereInput[]
    id?: StringFilter<"BoatPollVote"> | string
    pollId?: StringFilter<"BoatPollVote"> | string
    optionId?: StringFilter<"BoatPollVote"> | string
    voterId?: StringFilter<"BoatPollVote"> | string
    createdAt?: DateTimeFilter<"BoatPollVote"> | Date | string
  }

  export type BoatPollCreateWithoutOptionsInput = {
    id?: string
    title: string
    allowMultiple?: boolean
    isAnonymous?: boolean
    resultVisibility?: string
    endDate?: Date | string | null
    maxParticipants?: number | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: BoatPollVoteCreateNestedManyWithoutPollInput
  }

  export type BoatPollUncheckedCreateWithoutOptionsInput = {
    id?: string
    title: string
    allowMultiple?: boolean
    isAnonymous?: boolean
    resultVisibility?: string
    endDate?: Date | string | null
    maxParticipants?: number | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: BoatPollVoteUncheckedCreateNestedManyWithoutPollInput
  }

  export type BoatPollCreateOrConnectWithoutOptionsInput = {
    where: BoatPollWhereUniqueInput
    create: XOR<BoatPollCreateWithoutOptionsInput, BoatPollUncheckedCreateWithoutOptionsInput>
  }

  export type BoatPollVoteCreateWithoutOptionInput = {
    id?: string
    voterId: string
    createdAt?: Date | string
    poll: BoatPollCreateNestedOneWithoutVotesInput
  }

  export type BoatPollVoteUncheckedCreateWithoutOptionInput = {
    id?: string
    pollId: string
    voterId: string
    createdAt?: Date | string
  }

  export type BoatPollVoteCreateOrConnectWithoutOptionInput = {
    where: BoatPollVoteWhereUniqueInput
    create: XOR<BoatPollVoteCreateWithoutOptionInput, BoatPollVoteUncheckedCreateWithoutOptionInput>
  }

  export type BoatPollVoteCreateManyOptionInputEnvelope = {
    data: BoatPollVoteCreateManyOptionInput | BoatPollVoteCreateManyOptionInput[]
    skipDuplicates?: boolean
  }

  export type BoatPollUpsertWithoutOptionsInput = {
    update: XOR<BoatPollUpdateWithoutOptionsInput, BoatPollUncheckedUpdateWithoutOptionsInput>
    create: XOR<BoatPollCreateWithoutOptionsInput, BoatPollUncheckedCreateWithoutOptionsInput>
    where?: BoatPollWhereInput
  }

  export type BoatPollUpdateToOneWithWhereWithoutOptionsInput = {
    where?: BoatPollWhereInput
    data: XOR<BoatPollUpdateWithoutOptionsInput, BoatPollUncheckedUpdateWithoutOptionsInput>
  }

  export type BoatPollUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    allowMultiple?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    resultVisibility?: StringFieldUpdateOperationsInput | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: BoatPollVoteUpdateManyWithoutPollNestedInput
  }

  export type BoatPollUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    allowMultiple?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    resultVisibility?: StringFieldUpdateOperationsInput | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: BoatPollVoteUncheckedUpdateManyWithoutPollNestedInput
  }

  export type BoatPollVoteUpsertWithWhereUniqueWithoutOptionInput = {
    where: BoatPollVoteWhereUniqueInput
    update: XOR<BoatPollVoteUpdateWithoutOptionInput, BoatPollVoteUncheckedUpdateWithoutOptionInput>
    create: XOR<BoatPollVoteCreateWithoutOptionInput, BoatPollVoteUncheckedCreateWithoutOptionInput>
  }

  export type BoatPollVoteUpdateWithWhereUniqueWithoutOptionInput = {
    where: BoatPollVoteWhereUniqueInput
    data: XOR<BoatPollVoteUpdateWithoutOptionInput, BoatPollVoteUncheckedUpdateWithoutOptionInput>
  }

  export type BoatPollVoteUpdateManyWithWhereWithoutOptionInput = {
    where: BoatPollVoteScalarWhereInput
    data: XOR<BoatPollVoteUpdateManyMutationInput, BoatPollVoteUncheckedUpdateManyWithoutOptionInput>
  }

  export type BoatPollCreateWithoutVotesInput = {
    id?: string
    title: string
    allowMultiple?: boolean
    isAnonymous?: boolean
    resultVisibility?: string
    endDate?: Date | string | null
    maxParticipants?: number | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: BoatPollOptionCreateNestedManyWithoutPollInput
  }

  export type BoatPollUncheckedCreateWithoutVotesInput = {
    id?: string
    title: string
    allowMultiple?: boolean
    isAnonymous?: boolean
    resultVisibility?: string
    endDate?: Date | string | null
    maxParticipants?: number | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: BoatPollOptionUncheckedCreateNestedManyWithoutPollInput
  }

  export type BoatPollCreateOrConnectWithoutVotesInput = {
    where: BoatPollWhereUniqueInput
    create: XOR<BoatPollCreateWithoutVotesInput, BoatPollUncheckedCreateWithoutVotesInput>
  }

  export type BoatPollOptionCreateWithoutVotesInput = {
    id?: string
    text: string
    order?: number
    poll: BoatPollCreateNestedOneWithoutOptionsInput
  }

  export type BoatPollOptionUncheckedCreateWithoutVotesInput = {
    id?: string
    pollId: string
    text: string
    order?: number
  }

  export type BoatPollOptionCreateOrConnectWithoutVotesInput = {
    where: BoatPollOptionWhereUniqueInput
    create: XOR<BoatPollOptionCreateWithoutVotesInput, BoatPollOptionUncheckedCreateWithoutVotesInput>
  }

  export type BoatPollUpsertWithoutVotesInput = {
    update: XOR<BoatPollUpdateWithoutVotesInput, BoatPollUncheckedUpdateWithoutVotesInput>
    create: XOR<BoatPollCreateWithoutVotesInput, BoatPollUncheckedCreateWithoutVotesInput>
    where?: BoatPollWhereInput
  }

  export type BoatPollUpdateToOneWithWhereWithoutVotesInput = {
    where?: BoatPollWhereInput
    data: XOR<BoatPollUpdateWithoutVotesInput, BoatPollUncheckedUpdateWithoutVotesInput>
  }

  export type BoatPollUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    allowMultiple?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    resultVisibility?: StringFieldUpdateOperationsInput | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: BoatPollOptionUpdateManyWithoutPollNestedInput
  }

  export type BoatPollUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    allowMultiple?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    resultVisibility?: StringFieldUpdateOperationsInput | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: BoatPollOptionUncheckedUpdateManyWithoutPollNestedInput
  }

  export type BoatPollOptionUpsertWithoutVotesInput = {
    update: XOR<BoatPollOptionUpdateWithoutVotesInput, BoatPollOptionUncheckedUpdateWithoutVotesInput>
    create: XOR<BoatPollOptionCreateWithoutVotesInput, BoatPollOptionUncheckedCreateWithoutVotesInput>
    where?: BoatPollOptionWhereInput
  }

  export type BoatPollOptionUpdateToOneWithWhereWithoutVotesInput = {
    where?: BoatPollOptionWhereInput
    data: XOR<BoatPollOptionUpdateWithoutVotesInput, BoatPollOptionUncheckedUpdateWithoutVotesInput>
  }

  export type BoatPollOptionUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    poll?: BoatPollUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type BoatPollOptionUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type BoatPollOptionCreateManyPollInput = {
    id?: string
    text: string
    order?: number
  }

  export type BoatPollVoteCreateManyPollInput = {
    id?: string
    optionId: string
    voterId: string
    createdAt?: Date | string
  }

  export type BoatPollOptionUpdateWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    votes?: BoatPollVoteUpdateManyWithoutOptionNestedInput
  }

  export type BoatPollOptionUncheckedUpdateWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    votes?: BoatPollVoteUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type BoatPollOptionUncheckedUpdateManyWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type BoatPollVoteUpdateWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    option?: BoatPollOptionUpdateOneRequiredWithoutVotesNestedInput
  }

  export type BoatPollVoteUncheckedUpdateWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoatPollVoteUncheckedUpdateManyWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoatPollVoteCreateManyOptionInput = {
    id?: string
    pollId: string
    voterId: string
    createdAt?: Date | string
  }

  export type BoatPollVoteUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poll?: BoatPollUpdateOneRequiredWithoutVotesNestedInput
  }

  export type BoatPollVoteUncheckedUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoatPollVoteUncheckedUpdateManyWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}