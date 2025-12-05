
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Purohit
 * 
 */
export type Purohit = $Result.DefaultSelection<Prisma.$PurohitPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model PurohitAvailability
 * 
 */
export type PurohitAvailability = $Result.DefaultSelection<Prisma.$PurohitAvailabilityPayload>
/**
 * Model PurohitServiceLink
 * 
 */
export type PurohitServiceLink = $Result.DefaultSelection<Prisma.$PurohitServiceLinkPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  user: 'user',
  purohit: 'purohit',
  admin: 'admin'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const BookingStatus: {
  pending: 'pending',
  confirmed: 'confirmed',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purohit`: Exposes CRUD operations for the **Purohit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purohits
    * const purohits = await prisma.purohit.findMany()
    * ```
    */
  get purohit(): Prisma.PurohitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purohitAvailability`: Exposes CRUD operations for the **PurohitAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurohitAvailabilities
    * const purohitAvailabilities = await prisma.purohitAvailability.findMany()
    * ```
    */
  get purohitAvailability(): Prisma.PurohitAvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purohitServiceLink`: Exposes CRUD operations for the **PurohitServiceLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurohitServiceLinks
    * const purohitServiceLinks = await prisma.purohitServiceLink.findMany()
    * ```
    */
  get purohitServiceLink(): Prisma.PurohitServiceLinkDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
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
    User: 'User',
    Purohit: 'Purohit',
    Service: 'Service',
    Booking: 'Booking',
    PurohitAvailability: 'PurohitAvailability',
    PurohitServiceLink: 'PurohitServiceLink'
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
      modelProps: "user" | "purohit" | "service" | "booking" | "purohitAvailability" | "purohitServiceLink"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Purohit: {
        payload: Prisma.$PurohitPayload<ExtArgs>
        fields: Prisma.PurohitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurohitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurohitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitPayload>
          }
          findFirst: {
            args: Prisma.PurohitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurohitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitPayload>
          }
          findMany: {
            args: Prisma.PurohitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitPayload>[]
          }
          create: {
            args: Prisma.PurohitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitPayload>
          }
          createMany: {
            args: Prisma.PurohitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PurohitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitPayload>
          }
          update: {
            args: Prisma.PurohitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitPayload>
          }
          deleteMany: {
            args: Prisma.PurohitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurohitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurohitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitPayload>
          }
          aggregate: {
            args: Prisma.PurohitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurohit>
          }
          groupBy: {
            args: Prisma.PurohitGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurohitGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurohitCountArgs<ExtArgs>
            result: $Utils.Optional<PurohitCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      PurohitAvailability: {
        payload: Prisma.$PurohitAvailabilityPayload<ExtArgs>
        fields: Prisma.PurohitAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurohitAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurohitAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.PurohitAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurohitAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitAvailabilityPayload>
          }
          findMany: {
            args: Prisma.PurohitAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitAvailabilityPayload>[]
          }
          create: {
            args: Prisma.PurohitAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitAvailabilityPayload>
          }
          createMany: {
            args: Prisma.PurohitAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PurohitAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitAvailabilityPayload>
          }
          update: {
            args: Prisma.PurohitAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.PurohitAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurohitAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurohitAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.PurohitAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurohitAvailability>
          }
          groupBy: {
            args: Prisma.PurohitAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurohitAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurohitAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<PurohitAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      PurohitServiceLink: {
        payload: Prisma.$PurohitServiceLinkPayload<ExtArgs>
        fields: Prisma.PurohitServiceLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurohitServiceLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitServiceLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurohitServiceLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitServiceLinkPayload>
          }
          findFirst: {
            args: Prisma.PurohitServiceLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitServiceLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurohitServiceLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitServiceLinkPayload>
          }
          findMany: {
            args: Prisma.PurohitServiceLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitServiceLinkPayload>[]
          }
          create: {
            args: Prisma.PurohitServiceLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitServiceLinkPayload>
          }
          createMany: {
            args: Prisma.PurohitServiceLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PurohitServiceLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitServiceLinkPayload>
          }
          update: {
            args: Prisma.PurohitServiceLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitServiceLinkPayload>
          }
          deleteMany: {
            args: Prisma.PurohitServiceLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurohitServiceLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurohitServiceLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurohitServiceLinkPayload>
          }
          aggregate: {
            args: Prisma.PurohitServiceLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurohitServiceLink>
          }
          groupBy: {
            args: Prisma.PurohitServiceLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurohitServiceLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurohitServiceLinkCountArgs<ExtArgs>
            result: $Utils.Optional<PurohitServiceLinkCountAggregateOutputType> | number
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
    user?: UserOmit
    purohit?: PurohitOmit
    service?: ServiceOmit
    booking?: BookingOmit
    purohitAvailability?: PurohitAvailabilityOmit
    purohitServiceLink?: PurohitServiceLinkOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type PurohitCountOutputType
   */

  export type PurohitCountOutputType = {
    availability: number
    bookings: number
    servicesLink: number
  }

  export type PurohitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availability?: boolean | PurohitCountOutputTypeCountAvailabilityArgs
    bookings?: boolean | PurohitCountOutputTypeCountBookingsArgs
    servicesLink?: boolean | PurohitCountOutputTypeCountServicesLinkArgs
  }

  // Custom InputTypes
  /**
   * PurohitCountOutputType without action
   */
  export type PurohitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitCountOutputType
     */
    select?: PurohitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurohitCountOutputType without action
   */
  export type PurohitCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurohitAvailabilityWhereInput
  }

  /**
   * PurohitCountOutputType without action
   */
  export type PurohitCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * PurohitCountOutputType without action
   */
  export type PurohitCountOutputTypeCountServicesLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurohitServiceLinkWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    bookings: number
    purohitsLink: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ServiceCountOutputTypeCountBookingsArgs
    purohitsLink?: boolean | ServiceCountOutputTypeCountPurohitsLinkArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountPurohitsLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurohitServiceLinkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firebase_uid: string | null
    email: string | null
    name: string | null
    phone_number: string | null
    role: $Enums.UserRole | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firebase_uid: string | null
    email: string | null
    name: string | null
    phone_number: string | null
    role: $Enums.UserRole | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firebase_uid: number
    email: number
    name: number
    phone_number: number
    role: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firebase_uid?: true
    email?: true
    name?: true
    phone_number?: true
    role?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firebase_uid?: true
    email?: true
    name?: true
    phone_number?: true
    role?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firebase_uid?: true
    email?: true
    name?: true
    phone_number?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firebase_uid: string
    email: string
    name: string
    phone_number: string | null
    role: $Enums.UserRole
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firebase_uid?: boolean
    email?: boolean
    name?: boolean
    phone_number?: boolean
    role?: boolean
    created_at?: boolean
    purohitProfile?: boolean | User$purohitProfileArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    firebase_uid?: boolean
    email?: boolean
    name?: boolean
    phone_number?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firebase_uid" | "email" | "name" | "phone_number" | "role" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purohitProfile?: boolean | User$purohitProfileArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      purohitProfile: Prisma.$PurohitPayload<ExtArgs> | null
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firebase_uid: string
      email: string
      name: string
      phone_number: string | null
      role: $Enums.UserRole
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purohitProfile<T extends User$purohitProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$purohitProfileArgs<ExtArgs>>): Prisma__PurohitClient<$Result.GetResult<Prisma.$PurohitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firebase_uid: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.purohitProfile
   */
  export type User$purohitProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purohit
     */
    select?: PurohitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purohit
     */
    omit?: PurohitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitInclude<ExtArgs> | null
    where?: PurohitWhereInput
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Purohit
   */

  export type AggregatePurohit = {
    _count: PurohitCountAggregateOutputType | null
    _avg: PurohitAvgAggregateOutputType | null
    _sum: PurohitSumAggregateOutputType | null
    _min: PurohitMinAggregateOutputType | null
    _max: PurohitMaxAggregateOutputType | null
  }

  export type PurohitAvgAggregateOutputType = {
    user_id: number | null
    rating: Decimal | null
  }

  export type PurohitSumAggregateOutputType = {
    user_id: number | null
    rating: Decimal | null
  }

  export type PurohitMinAggregateOutputType = {
    user_id: number | null
    bio: string | null
    city: string | null
    rating: Decimal | null
    is_verified: boolean | null
  }

  export type PurohitMaxAggregateOutputType = {
    user_id: number | null
    bio: string | null
    city: string | null
    rating: Decimal | null
    is_verified: boolean | null
  }

  export type PurohitCountAggregateOutputType = {
    user_id: number
    bio: number
    city: number
    rating: number
    is_verified: number
    _all: number
  }


  export type PurohitAvgAggregateInputType = {
    user_id?: true
    rating?: true
  }

  export type PurohitSumAggregateInputType = {
    user_id?: true
    rating?: true
  }

  export type PurohitMinAggregateInputType = {
    user_id?: true
    bio?: true
    city?: true
    rating?: true
    is_verified?: true
  }

  export type PurohitMaxAggregateInputType = {
    user_id?: true
    bio?: true
    city?: true
    rating?: true
    is_verified?: true
  }

  export type PurohitCountAggregateInputType = {
    user_id?: true
    bio?: true
    city?: true
    rating?: true
    is_verified?: true
    _all?: true
  }

  export type PurohitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purohit to aggregate.
     */
    where?: PurohitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purohits to fetch.
     */
    orderBy?: PurohitOrderByWithRelationInput | PurohitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurohitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purohits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purohits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purohits
    **/
    _count?: true | PurohitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurohitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurohitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurohitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurohitMaxAggregateInputType
  }

  export type GetPurohitAggregateType<T extends PurohitAggregateArgs> = {
        [P in keyof T & keyof AggregatePurohit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurohit[P]>
      : GetScalarType<T[P], AggregatePurohit[P]>
  }




  export type PurohitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurohitWhereInput
    orderBy?: PurohitOrderByWithAggregationInput | PurohitOrderByWithAggregationInput[]
    by: PurohitScalarFieldEnum[] | PurohitScalarFieldEnum
    having?: PurohitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurohitCountAggregateInputType | true
    _avg?: PurohitAvgAggregateInputType
    _sum?: PurohitSumAggregateInputType
    _min?: PurohitMinAggregateInputType
    _max?: PurohitMaxAggregateInputType
  }

  export type PurohitGroupByOutputType = {
    user_id: number
    bio: string | null
    city: string
    rating: Decimal
    is_verified: boolean
    _count: PurohitCountAggregateOutputType | null
    _avg: PurohitAvgAggregateOutputType | null
    _sum: PurohitSumAggregateOutputType | null
    _min: PurohitMinAggregateOutputType | null
    _max: PurohitMaxAggregateOutputType | null
  }

  type GetPurohitGroupByPayload<T extends PurohitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurohitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurohitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurohitGroupByOutputType[P]>
            : GetScalarType<T[P], PurohitGroupByOutputType[P]>
        }
      >
    >


  export type PurohitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    bio?: boolean
    city?: boolean
    rating?: boolean
    is_verified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    availability?: boolean | Purohit$availabilityArgs<ExtArgs>
    bookings?: boolean | Purohit$bookingsArgs<ExtArgs>
    servicesLink?: boolean | Purohit$servicesLinkArgs<ExtArgs>
    _count?: boolean | PurohitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purohit"]>



  export type PurohitSelectScalar = {
    user_id?: boolean
    bio?: boolean
    city?: boolean
    rating?: boolean
    is_verified?: boolean
  }

  export type PurohitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "bio" | "city" | "rating" | "is_verified", ExtArgs["result"]["purohit"]>
  export type PurohitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    availability?: boolean | Purohit$availabilityArgs<ExtArgs>
    bookings?: boolean | Purohit$bookingsArgs<ExtArgs>
    servicesLink?: boolean | Purohit$servicesLinkArgs<ExtArgs>
    _count?: boolean | PurohitCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PurohitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purohit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      availability: Prisma.$PurohitAvailabilityPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      servicesLink: Prisma.$PurohitServiceLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      bio: string | null
      city: string
      rating: Prisma.Decimal
      is_verified: boolean
    }, ExtArgs["result"]["purohit"]>
    composites: {}
  }

  type PurohitGetPayload<S extends boolean | null | undefined | PurohitDefaultArgs> = $Result.GetResult<Prisma.$PurohitPayload, S>

  type PurohitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurohitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurohitCountAggregateInputType | true
    }

  export interface PurohitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purohit'], meta: { name: 'Purohit' } }
    /**
     * Find zero or one Purohit that matches the filter.
     * @param {PurohitFindUniqueArgs} args - Arguments to find a Purohit
     * @example
     * // Get one Purohit
     * const purohit = await prisma.purohit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurohitFindUniqueArgs>(args: SelectSubset<T, PurohitFindUniqueArgs<ExtArgs>>): Prisma__PurohitClient<$Result.GetResult<Prisma.$PurohitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purohit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurohitFindUniqueOrThrowArgs} args - Arguments to find a Purohit
     * @example
     * // Get one Purohit
     * const purohit = await prisma.purohit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurohitFindUniqueOrThrowArgs>(args: SelectSubset<T, PurohitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurohitClient<$Result.GetResult<Prisma.$PurohitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purohit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitFindFirstArgs} args - Arguments to find a Purohit
     * @example
     * // Get one Purohit
     * const purohit = await prisma.purohit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurohitFindFirstArgs>(args?: SelectSubset<T, PurohitFindFirstArgs<ExtArgs>>): Prisma__PurohitClient<$Result.GetResult<Prisma.$PurohitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purohit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitFindFirstOrThrowArgs} args - Arguments to find a Purohit
     * @example
     * // Get one Purohit
     * const purohit = await prisma.purohit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurohitFindFirstOrThrowArgs>(args?: SelectSubset<T, PurohitFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurohitClient<$Result.GetResult<Prisma.$PurohitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purohits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purohits
     * const purohits = await prisma.purohit.findMany()
     * 
     * // Get first 10 Purohits
     * const purohits = await prisma.purohit.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const purohitWithUser_idOnly = await prisma.purohit.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends PurohitFindManyArgs>(args?: SelectSubset<T, PurohitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurohitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purohit.
     * @param {PurohitCreateArgs} args - Arguments to create a Purohit.
     * @example
     * // Create one Purohit
     * const Purohit = await prisma.purohit.create({
     *   data: {
     *     // ... data to create a Purohit
     *   }
     * })
     * 
     */
    create<T extends PurohitCreateArgs>(args: SelectSubset<T, PurohitCreateArgs<ExtArgs>>): Prisma__PurohitClient<$Result.GetResult<Prisma.$PurohitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purohits.
     * @param {PurohitCreateManyArgs} args - Arguments to create many Purohits.
     * @example
     * // Create many Purohits
     * const purohit = await prisma.purohit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurohitCreateManyArgs>(args?: SelectSubset<T, PurohitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Purohit.
     * @param {PurohitDeleteArgs} args - Arguments to delete one Purohit.
     * @example
     * // Delete one Purohit
     * const Purohit = await prisma.purohit.delete({
     *   where: {
     *     // ... filter to delete one Purohit
     *   }
     * })
     * 
     */
    delete<T extends PurohitDeleteArgs>(args: SelectSubset<T, PurohitDeleteArgs<ExtArgs>>): Prisma__PurohitClient<$Result.GetResult<Prisma.$PurohitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purohit.
     * @param {PurohitUpdateArgs} args - Arguments to update one Purohit.
     * @example
     * // Update one Purohit
     * const purohit = await prisma.purohit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurohitUpdateArgs>(args: SelectSubset<T, PurohitUpdateArgs<ExtArgs>>): Prisma__PurohitClient<$Result.GetResult<Prisma.$PurohitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purohits.
     * @param {PurohitDeleteManyArgs} args - Arguments to filter Purohits to delete.
     * @example
     * // Delete a few Purohits
     * const { count } = await prisma.purohit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurohitDeleteManyArgs>(args?: SelectSubset<T, PurohitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purohits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purohits
     * const purohit = await prisma.purohit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurohitUpdateManyArgs>(args: SelectSubset<T, PurohitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Purohit.
     * @param {PurohitUpsertArgs} args - Arguments to update or create a Purohit.
     * @example
     * // Update or create a Purohit
     * const purohit = await prisma.purohit.upsert({
     *   create: {
     *     // ... data to create a Purohit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purohit we want to update
     *   }
     * })
     */
    upsert<T extends PurohitUpsertArgs>(args: SelectSubset<T, PurohitUpsertArgs<ExtArgs>>): Prisma__PurohitClient<$Result.GetResult<Prisma.$PurohitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purohits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitCountArgs} args - Arguments to filter Purohits to count.
     * @example
     * // Count the number of Purohits
     * const count = await prisma.purohit.count({
     *   where: {
     *     // ... the filter for the Purohits we want to count
     *   }
     * })
    **/
    count<T extends PurohitCountArgs>(
      args?: Subset<T, PurohitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurohitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purohit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurohitAggregateArgs>(args: Subset<T, PurohitAggregateArgs>): Prisma.PrismaPromise<GetPurohitAggregateType<T>>

    /**
     * Group by Purohit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitGroupByArgs} args - Group by arguments.
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
      T extends PurohitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurohitGroupByArgs['orderBy'] }
        : { orderBy?: PurohitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurohitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurohitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purohit model
   */
  readonly fields: PurohitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purohit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurohitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    availability<T extends Purohit$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, Purohit$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurohitAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Purohit$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Purohit$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    servicesLink<T extends Purohit$servicesLinkArgs<ExtArgs> = {}>(args?: Subset<T, Purohit$servicesLinkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurohitServiceLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Purohit model
   */
  interface PurohitFieldRefs {
    readonly user_id: FieldRef<"Purohit", 'Int'>
    readonly bio: FieldRef<"Purohit", 'String'>
    readonly city: FieldRef<"Purohit", 'String'>
    readonly rating: FieldRef<"Purohit", 'Decimal'>
    readonly is_verified: FieldRef<"Purohit", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Purohit findUnique
   */
  export type PurohitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purohit
     */
    select?: PurohitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purohit
     */
    omit?: PurohitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitInclude<ExtArgs> | null
    /**
     * Filter, which Purohit to fetch.
     */
    where: PurohitWhereUniqueInput
  }

  /**
   * Purohit findUniqueOrThrow
   */
  export type PurohitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purohit
     */
    select?: PurohitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purohit
     */
    omit?: PurohitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitInclude<ExtArgs> | null
    /**
     * Filter, which Purohit to fetch.
     */
    where: PurohitWhereUniqueInput
  }

  /**
   * Purohit findFirst
   */
  export type PurohitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purohit
     */
    select?: PurohitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purohit
     */
    omit?: PurohitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitInclude<ExtArgs> | null
    /**
     * Filter, which Purohit to fetch.
     */
    where?: PurohitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purohits to fetch.
     */
    orderBy?: PurohitOrderByWithRelationInput | PurohitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purohits.
     */
    cursor?: PurohitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purohits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purohits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purohits.
     */
    distinct?: PurohitScalarFieldEnum | PurohitScalarFieldEnum[]
  }

  /**
   * Purohit findFirstOrThrow
   */
  export type PurohitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purohit
     */
    select?: PurohitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purohit
     */
    omit?: PurohitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitInclude<ExtArgs> | null
    /**
     * Filter, which Purohit to fetch.
     */
    where?: PurohitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purohits to fetch.
     */
    orderBy?: PurohitOrderByWithRelationInput | PurohitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purohits.
     */
    cursor?: PurohitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purohits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purohits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purohits.
     */
    distinct?: PurohitScalarFieldEnum | PurohitScalarFieldEnum[]
  }

  /**
   * Purohit findMany
   */
  export type PurohitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purohit
     */
    select?: PurohitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purohit
     */
    omit?: PurohitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitInclude<ExtArgs> | null
    /**
     * Filter, which Purohits to fetch.
     */
    where?: PurohitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purohits to fetch.
     */
    orderBy?: PurohitOrderByWithRelationInput | PurohitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purohits.
     */
    cursor?: PurohitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purohits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purohits.
     */
    skip?: number
    distinct?: PurohitScalarFieldEnum | PurohitScalarFieldEnum[]
  }

  /**
   * Purohit create
   */
  export type PurohitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purohit
     */
    select?: PurohitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purohit
     */
    omit?: PurohitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitInclude<ExtArgs> | null
    /**
     * The data needed to create a Purohit.
     */
    data: XOR<PurohitCreateInput, PurohitUncheckedCreateInput>
  }

  /**
   * Purohit createMany
   */
  export type PurohitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purohits.
     */
    data: PurohitCreateManyInput | PurohitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purohit update
   */
  export type PurohitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purohit
     */
    select?: PurohitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purohit
     */
    omit?: PurohitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitInclude<ExtArgs> | null
    /**
     * The data needed to update a Purohit.
     */
    data: XOR<PurohitUpdateInput, PurohitUncheckedUpdateInput>
    /**
     * Choose, which Purohit to update.
     */
    where: PurohitWhereUniqueInput
  }

  /**
   * Purohit updateMany
   */
  export type PurohitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purohits.
     */
    data: XOR<PurohitUpdateManyMutationInput, PurohitUncheckedUpdateManyInput>
    /**
     * Filter which Purohits to update
     */
    where?: PurohitWhereInput
    /**
     * Limit how many Purohits to update.
     */
    limit?: number
  }

  /**
   * Purohit upsert
   */
  export type PurohitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purohit
     */
    select?: PurohitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purohit
     */
    omit?: PurohitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitInclude<ExtArgs> | null
    /**
     * The filter to search for the Purohit to update in case it exists.
     */
    where: PurohitWhereUniqueInput
    /**
     * In case the Purohit found by the `where` argument doesn't exist, create a new Purohit with this data.
     */
    create: XOR<PurohitCreateInput, PurohitUncheckedCreateInput>
    /**
     * In case the Purohit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurohitUpdateInput, PurohitUncheckedUpdateInput>
  }

  /**
   * Purohit delete
   */
  export type PurohitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purohit
     */
    select?: PurohitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purohit
     */
    omit?: PurohitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitInclude<ExtArgs> | null
    /**
     * Filter which Purohit to delete.
     */
    where: PurohitWhereUniqueInput
  }

  /**
   * Purohit deleteMany
   */
  export type PurohitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purohits to delete
     */
    where?: PurohitWhereInput
    /**
     * Limit how many Purohits to delete.
     */
    limit?: number
  }

  /**
   * Purohit.availability
   */
  export type Purohit$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitAvailability
     */
    select?: PurohitAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitAvailability
     */
    omit?: PurohitAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitAvailabilityInclude<ExtArgs> | null
    where?: PurohitAvailabilityWhereInput
    orderBy?: PurohitAvailabilityOrderByWithRelationInput | PurohitAvailabilityOrderByWithRelationInput[]
    cursor?: PurohitAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurohitAvailabilityScalarFieldEnum | PurohitAvailabilityScalarFieldEnum[]
  }

  /**
   * Purohit.bookings
   */
  export type Purohit$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Purohit.servicesLink
   */
  export type Purohit$servicesLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitServiceLink
     */
    select?: PurohitServiceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitServiceLink
     */
    omit?: PurohitServiceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitServiceLinkInclude<ExtArgs> | null
    where?: PurohitServiceLinkWhereInput
    orderBy?: PurohitServiceLinkOrderByWithRelationInput | PurohitServiceLinkOrderByWithRelationInput[]
    cursor?: PurohitServiceLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurohitServiceLinkScalarFieldEnum | PurohitServiceLinkScalarFieldEnum[]
  }

  /**
   * Purohit without action
   */
  export type PurohitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purohit
     */
    select?: PurohitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purohit
     */
    omit?: PurohitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
    duration_minutes: number | null
    price: Decimal | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
    duration_minutes: number | null
    price: Decimal | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    duration_minutes: number | null
    price: Decimal | null
    created_at: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    duration_minutes: number | null
    price: Decimal | null
    created_at: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    duration_minutes: number
    price: number
    created_at: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
    duration_minutes?: true
    price?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
    duration_minutes?: true
    price?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    duration_minutes?: true
    price?: true
    created_at?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    duration_minutes?: true
    price?: true
    created_at?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    duration_minutes?: true
    price?: true
    created_at?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    name: string
    description: string | null
    duration_minutes: number
    price: Decimal
    created_at: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    duration_minutes?: boolean
    price?: boolean
    created_at?: boolean
    bookings?: boolean | Service$bookingsArgs<ExtArgs>
    purohitsLink?: boolean | Service$purohitsLinkArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>



  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    duration_minutes?: boolean
    price?: boolean
    created_at?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "duration_minutes" | "price" | "created_at", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Service$bookingsArgs<ExtArgs>
    purohitsLink?: boolean | Service$purohitsLinkArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      purohitsLink: Prisma.$PurohitServiceLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      duration_minutes: number
      price: Prisma.Decimal
      created_at: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Service$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Service$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purohitsLink<T extends Service$purohitsLinkArgs<ExtArgs> = {}>(args?: Subset<T, Service$purohitsLinkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurohitServiceLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly duration_minutes: FieldRef<"Service", 'Int'>
    readonly price: FieldRef<"Service", 'Decimal'>
    readonly created_at: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.bookings
   */
  export type Service$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Service.purohitsLink
   */
  export type Service$purohitsLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitServiceLink
     */
    select?: PurohitServiceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitServiceLink
     */
    omit?: PurohitServiceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitServiceLinkInclude<ExtArgs> | null
    where?: PurohitServiceLinkWhereInput
    orderBy?: PurohitServiceLinkOrderByWithRelationInput | PurohitServiceLinkOrderByWithRelationInput[]
    cursor?: PurohitServiceLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurohitServiceLinkScalarFieldEnum | PurohitServiceLinkScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    purohit_id: number | null
    service_id: number | null
    total_price: Decimal | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    purohit_id: number | null
    service_id: number | null
    total_price: Decimal | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    purohit_id: number | null
    service_id: number | null
    start_time: Date | null
    end_time: Date | null
    location_address: string | null
    total_price: Decimal | null
    status: $Enums.BookingStatus | null
    created_at: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    purohit_id: number | null
    service_id: number | null
    start_time: Date | null
    end_time: Date | null
    location_address: string | null
    total_price: Decimal | null
    status: $Enums.BookingStatus | null
    created_at: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    user_id: number
    purohit_id: number
    service_id: number
    start_time: number
    end_time: number
    location_address: number
    total_price: number
    status: number
    created_at: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    user_id?: true
    purohit_id?: true
    service_id?: true
    total_price?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    user_id?: true
    purohit_id?: true
    service_id?: true
    total_price?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    user_id?: true
    purohit_id?: true
    service_id?: true
    start_time?: true
    end_time?: true
    location_address?: true
    total_price?: true
    status?: true
    created_at?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    user_id?: true
    purohit_id?: true
    service_id?: true
    start_time?: true
    end_time?: true
    location_address?: true
    total_price?: true
    status?: true
    created_at?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    user_id?: true
    purohit_id?: true
    service_id?: true
    start_time?: true
    end_time?: true
    location_address?: true
    total_price?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    user_id: number
    purohit_id: number
    service_id: number
    start_time: Date
    end_time: Date
    location_address: string
    total_price: Decimal
    status: $Enums.BookingStatus
    created_at: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    purohit_id?: boolean
    service_id?: boolean
    start_time?: boolean
    end_time?: boolean
    location_address?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    purohit?: boolean | PurohitDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type BookingSelectScalar = {
    id?: boolean
    user_id?: boolean
    purohit_id?: boolean
    service_id?: boolean
    start_time?: boolean
    end_time?: boolean
    location_address?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "purohit_id" | "service_id" | "start_time" | "end_time" | "location_address" | "total_price" | "status" | "created_at", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    purohit?: boolean | PurohitDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      purohit: Prisma.$PurohitPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      purohit_id: number
      service_id: number
      start_time: Date
      end_time: Date
      location_address: string
      total_price: Prisma.Decimal
      status: $Enums.BookingStatus
      created_at: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purohit<T extends PurohitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurohitDefaultArgs<ExtArgs>>): Prisma__PurohitClient<$Result.GetResult<Prisma.$PurohitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly user_id: FieldRef<"Booking", 'Int'>
    readonly purohit_id: FieldRef<"Booking", 'Int'>
    readonly service_id: FieldRef<"Booking", 'Int'>
    readonly start_time: FieldRef<"Booking", 'DateTime'>
    readonly end_time: FieldRef<"Booking", 'DateTime'>
    readonly location_address: FieldRef<"Booking", 'String'>
    readonly total_price: FieldRef<"Booking", 'Decimal'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly created_at: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model PurohitAvailability
   */

  export type AggregatePurohitAvailability = {
    _count: PurohitAvailabilityCountAggregateOutputType | null
    _avg: PurohitAvailabilityAvgAggregateOutputType | null
    _sum: PurohitAvailabilitySumAggregateOutputType | null
    _min: PurohitAvailabilityMinAggregateOutputType | null
    _max: PurohitAvailabilityMaxAggregateOutputType | null
  }

  export type PurohitAvailabilityAvgAggregateOutputType = {
    id: number | null
    purohit_id: number | null
  }

  export type PurohitAvailabilitySumAggregateOutputType = {
    id: number | null
    purohit_id: number | null
  }

  export type PurohitAvailabilityMinAggregateOutputType = {
    id: number | null
    purohit_id: number | null
    start_time: Date | null
    end_time: Date | null
    is_available: boolean | null
  }

  export type PurohitAvailabilityMaxAggregateOutputType = {
    id: number | null
    purohit_id: number | null
    start_time: Date | null
    end_time: Date | null
    is_available: boolean | null
  }

  export type PurohitAvailabilityCountAggregateOutputType = {
    id: number
    purohit_id: number
    start_time: number
    end_time: number
    is_available: number
    _all: number
  }


  export type PurohitAvailabilityAvgAggregateInputType = {
    id?: true
    purohit_id?: true
  }

  export type PurohitAvailabilitySumAggregateInputType = {
    id?: true
    purohit_id?: true
  }

  export type PurohitAvailabilityMinAggregateInputType = {
    id?: true
    purohit_id?: true
    start_time?: true
    end_time?: true
    is_available?: true
  }

  export type PurohitAvailabilityMaxAggregateInputType = {
    id?: true
    purohit_id?: true
    start_time?: true
    end_time?: true
    is_available?: true
  }

  export type PurohitAvailabilityCountAggregateInputType = {
    id?: true
    purohit_id?: true
    start_time?: true
    end_time?: true
    is_available?: true
    _all?: true
  }

  export type PurohitAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurohitAvailability to aggregate.
     */
    where?: PurohitAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurohitAvailabilities to fetch.
     */
    orderBy?: PurohitAvailabilityOrderByWithRelationInput | PurohitAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurohitAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurohitAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurohitAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurohitAvailabilities
    **/
    _count?: true | PurohitAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurohitAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurohitAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurohitAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurohitAvailabilityMaxAggregateInputType
  }

  export type GetPurohitAvailabilityAggregateType<T extends PurohitAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregatePurohitAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurohitAvailability[P]>
      : GetScalarType<T[P], AggregatePurohitAvailability[P]>
  }




  export type PurohitAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurohitAvailabilityWhereInput
    orderBy?: PurohitAvailabilityOrderByWithAggregationInput | PurohitAvailabilityOrderByWithAggregationInput[]
    by: PurohitAvailabilityScalarFieldEnum[] | PurohitAvailabilityScalarFieldEnum
    having?: PurohitAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurohitAvailabilityCountAggregateInputType | true
    _avg?: PurohitAvailabilityAvgAggregateInputType
    _sum?: PurohitAvailabilitySumAggregateInputType
    _min?: PurohitAvailabilityMinAggregateInputType
    _max?: PurohitAvailabilityMaxAggregateInputType
  }

  export type PurohitAvailabilityGroupByOutputType = {
    id: number
    purohit_id: number
    start_time: Date
    end_time: Date
    is_available: boolean
    _count: PurohitAvailabilityCountAggregateOutputType | null
    _avg: PurohitAvailabilityAvgAggregateOutputType | null
    _sum: PurohitAvailabilitySumAggregateOutputType | null
    _min: PurohitAvailabilityMinAggregateOutputType | null
    _max: PurohitAvailabilityMaxAggregateOutputType | null
  }

  type GetPurohitAvailabilityGroupByPayload<T extends PurohitAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurohitAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurohitAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurohitAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], PurohitAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type PurohitAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purohit_id?: boolean
    start_time?: boolean
    end_time?: boolean
    is_available?: boolean
    purohit?: boolean | PurohitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purohitAvailability"]>



  export type PurohitAvailabilitySelectScalar = {
    id?: boolean
    purohit_id?: boolean
    start_time?: boolean
    end_time?: boolean
    is_available?: boolean
  }

  export type PurohitAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "purohit_id" | "start_time" | "end_time" | "is_available", ExtArgs["result"]["purohitAvailability"]>
  export type PurohitAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purohit?: boolean | PurohitDefaultArgs<ExtArgs>
  }

  export type $PurohitAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurohitAvailability"
    objects: {
      purohit: Prisma.$PurohitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      purohit_id: number
      start_time: Date
      end_time: Date
      is_available: boolean
    }, ExtArgs["result"]["purohitAvailability"]>
    composites: {}
  }

  type PurohitAvailabilityGetPayload<S extends boolean | null | undefined | PurohitAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$PurohitAvailabilityPayload, S>

  type PurohitAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurohitAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurohitAvailabilityCountAggregateInputType | true
    }

  export interface PurohitAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurohitAvailability'], meta: { name: 'PurohitAvailability' } }
    /**
     * Find zero or one PurohitAvailability that matches the filter.
     * @param {PurohitAvailabilityFindUniqueArgs} args - Arguments to find a PurohitAvailability
     * @example
     * // Get one PurohitAvailability
     * const purohitAvailability = await prisma.purohitAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurohitAvailabilityFindUniqueArgs>(args: SelectSubset<T, PurohitAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__PurohitAvailabilityClient<$Result.GetResult<Prisma.$PurohitAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurohitAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurohitAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a PurohitAvailability
     * @example
     * // Get one PurohitAvailability
     * const purohitAvailability = await prisma.purohitAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurohitAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, PurohitAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurohitAvailabilityClient<$Result.GetResult<Prisma.$PurohitAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurohitAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitAvailabilityFindFirstArgs} args - Arguments to find a PurohitAvailability
     * @example
     * // Get one PurohitAvailability
     * const purohitAvailability = await prisma.purohitAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurohitAvailabilityFindFirstArgs>(args?: SelectSubset<T, PurohitAvailabilityFindFirstArgs<ExtArgs>>): Prisma__PurohitAvailabilityClient<$Result.GetResult<Prisma.$PurohitAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurohitAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitAvailabilityFindFirstOrThrowArgs} args - Arguments to find a PurohitAvailability
     * @example
     * // Get one PurohitAvailability
     * const purohitAvailability = await prisma.purohitAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurohitAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, PurohitAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurohitAvailabilityClient<$Result.GetResult<Prisma.$PurohitAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurohitAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurohitAvailabilities
     * const purohitAvailabilities = await prisma.purohitAvailability.findMany()
     * 
     * // Get first 10 PurohitAvailabilities
     * const purohitAvailabilities = await prisma.purohitAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purohitAvailabilityWithIdOnly = await prisma.purohitAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurohitAvailabilityFindManyArgs>(args?: SelectSubset<T, PurohitAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurohitAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurohitAvailability.
     * @param {PurohitAvailabilityCreateArgs} args - Arguments to create a PurohitAvailability.
     * @example
     * // Create one PurohitAvailability
     * const PurohitAvailability = await prisma.purohitAvailability.create({
     *   data: {
     *     // ... data to create a PurohitAvailability
     *   }
     * })
     * 
     */
    create<T extends PurohitAvailabilityCreateArgs>(args: SelectSubset<T, PurohitAvailabilityCreateArgs<ExtArgs>>): Prisma__PurohitAvailabilityClient<$Result.GetResult<Prisma.$PurohitAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurohitAvailabilities.
     * @param {PurohitAvailabilityCreateManyArgs} args - Arguments to create many PurohitAvailabilities.
     * @example
     * // Create many PurohitAvailabilities
     * const purohitAvailability = await prisma.purohitAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurohitAvailabilityCreateManyArgs>(args?: SelectSubset<T, PurohitAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PurohitAvailability.
     * @param {PurohitAvailabilityDeleteArgs} args - Arguments to delete one PurohitAvailability.
     * @example
     * // Delete one PurohitAvailability
     * const PurohitAvailability = await prisma.purohitAvailability.delete({
     *   where: {
     *     // ... filter to delete one PurohitAvailability
     *   }
     * })
     * 
     */
    delete<T extends PurohitAvailabilityDeleteArgs>(args: SelectSubset<T, PurohitAvailabilityDeleteArgs<ExtArgs>>): Prisma__PurohitAvailabilityClient<$Result.GetResult<Prisma.$PurohitAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurohitAvailability.
     * @param {PurohitAvailabilityUpdateArgs} args - Arguments to update one PurohitAvailability.
     * @example
     * // Update one PurohitAvailability
     * const purohitAvailability = await prisma.purohitAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurohitAvailabilityUpdateArgs>(args: SelectSubset<T, PurohitAvailabilityUpdateArgs<ExtArgs>>): Prisma__PurohitAvailabilityClient<$Result.GetResult<Prisma.$PurohitAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurohitAvailabilities.
     * @param {PurohitAvailabilityDeleteManyArgs} args - Arguments to filter PurohitAvailabilities to delete.
     * @example
     * // Delete a few PurohitAvailabilities
     * const { count } = await prisma.purohitAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurohitAvailabilityDeleteManyArgs>(args?: SelectSubset<T, PurohitAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurohitAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurohitAvailabilities
     * const purohitAvailability = await prisma.purohitAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurohitAvailabilityUpdateManyArgs>(args: SelectSubset<T, PurohitAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PurohitAvailability.
     * @param {PurohitAvailabilityUpsertArgs} args - Arguments to update or create a PurohitAvailability.
     * @example
     * // Update or create a PurohitAvailability
     * const purohitAvailability = await prisma.purohitAvailability.upsert({
     *   create: {
     *     // ... data to create a PurohitAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurohitAvailability we want to update
     *   }
     * })
     */
    upsert<T extends PurohitAvailabilityUpsertArgs>(args: SelectSubset<T, PurohitAvailabilityUpsertArgs<ExtArgs>>): Prisma__PurohitAvailabilityClient<$Result.GetResult<Prisma.$PurohitAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurohitAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitAvailabilityCountArgs} args - Arguments to filter PurohitAvailabilities to count.
     * @example
     * // Count the number of PurohitAvailabilities
     * const count = await prisma.purohitAvailability.count({
     *   where: {
     *     // ... the filter for the PurohitAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends PurohitAvailabilityCountArgs>(
      args?: Subset<T, PurohitAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurohitAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurohitAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurohitAvailabilityAggregateArgs>(args: Subset<T, PurohitAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetPurohitAvailabilityAggregateType<T>>

    /**
     * Group by PurohitAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitAvailabilityGroupByArgs} args - Group by arguments.
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
      T extends PurohitAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurohitAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: PurohitAvailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurohitAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurohitAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurohitAvailability model
   */
  readonly fields: PurohitAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurohitAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurohitAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purohit<T extends PurohitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurohitDefaultArgs<ExtArgs>>): Prisma__PurohitClient<$Result.GetResult<Prisma.$PurohitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PurohitAvailability model
   */
  interface PurohitAvailabilityFieldRefs {
    readonly id: FieldRef<"PurohitAvailability", 'Int'>
    readonly purohit_id: FieldRef<"PurohitAvailability", 'Int'>
    readonly start_time: FieldRef<"PurohitAvailability", 'DateTime'>
    readonly end_time: FieldRef<"PurohitAvailability", 'DateTime'>
    readonly is_available: FieldRef<"PurohitAvailability", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PurohitAvailability findUnique
   */
  export type PurohitAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitAvailability
     */
    select?: PurohitAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitAvailability
     */
    omit?: PurohitAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which PurohitAvailability to fetch.
     */
    where: PurohitAvailabilityWhereUniqueInput
  }

  /**
   * PurohitAvailability findUniqueOrThrow
   */
  export type PurohitAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitAvailability
     */
    select?: PurohitAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitAvailability
     */
    omit?: PurohitAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which PurohitAvailability to fetch.
     */
    where: PurohitAvailabilityWhereUniqueInput
  }

  /**
   * PurohitAvailability findFirst
   */
  export type PurohitAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitAvailability
     */
    select?: PurohitAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitAvailability
     */
    omit?: PurohitAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which PurohitAvailability to fetch.
     */
    where?: PurohitAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurohitAvailabilities to fetch.
     */
    orderBy?: PurohitAvailabilityOrderByWithRelationInput | PurohitAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurohitAvailabilities.
     */
    cursor?: PurohitAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurohitAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurohitAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurohitAvailabilities.
     */
    distinct?: PurohitAvailabilityScalarFieldEnum | PurohitAvailabilityScalarFieldEnum[]
  }

  /**
   * PurohitAvailability findFirstOrThrow
   */
  export type PurohitAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitAvailability
     */
    select?: PurohitAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitAvailability
     */
    omit?: PurohitAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which PurohitAvailability to fetch.
     */
    where?: PurohitAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurohitAvailabilities to fetch.
     */
    orderBy?: PurohitAvailabilityOrderByWithRelationInput | PurohitAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurohitAvailabilities.
     */
    cursor?: PurohitAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurohitAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurohitAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurohitAvailabilities.
     */
    distinct?: PurohitAvailabilityScalarFieldEnum | PurohitAvailabilityScalarFieldEnum[]
  }

  /**
   * PurohitAvailability findMany
   */
  export type PurohitAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitAvailability
     */
    select?: PurohitAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitAvailability
     */
    omit?: PurohitAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which PurohitAvailabilities to fetch.
     */
    where?: PurohitAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurohitAvailabilities to fetch.
     */
    orderBy?: PurohitAvailabilityOrderByWithRelationInput | PurohitAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurohitAvailabilities.
     */
    cursor?: PurohitAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurohitAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurohitAvailabilities.
     */
    skip?: number
    distinct?: PurohitAvailabilityScalarFieldEnum | PurohitAvailabilityScalarFieldEnum[]
  }

  /**
   * PurohitAvailability create
   */
  export type PurohitAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitAvailability
     */
    select?: PurohitAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitAvailability
     */
    omit?: PurohitAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a PurohitAvailability.
     */
    data: XOR<PurohitAvailabilityCreateInput, PurohitAvailabilityUncheckedCreateInput>
  }

  /**
   * PurohitAvailability createMany
   */
  export type PurohitAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurohitAvailabilities.
     */
    data: PurohitAvailabilityCreateManyInput | PurohitAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurohitAvailability update
   */
  export type PurohitAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitAvailability
     */
    select?: PurohitAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitAvailability
     */
    omit?: PurohitAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a PurohitAvailability.
     */
    data: XOR<PurohitAvailabilityUpdateInput, PurohitAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which PurohitAvailability to update.
     */
    where: PurohitAvailabilityWhereUniqueInput
  }

  /**
   * PurohitAvailability updateMany
   */
  export type PurohitAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurohitAvailabilities.
     */
    data: XOR<PurohitAvailabilityUpdateManyMutationInput, PurohitAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which PurohitAvailabilities to update
     */
    where?: PurohitAvailabilityWhereInput
    /**
     * Limit how many PurohitAvailabilities to update.
     */
    limit?: number
  }

  /**
   * PurohitAvailability upsert
   */
  export type PurohitAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitAvailability
     */
    select?: PurohitAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitAvailability
     */
    omit?: PurohitAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the PurohitAvailability to update in case it exists.
     */
    where: PurohitAvailabilityWhereUniqueInput
    /**
     * In case the PurohitAvailability found by the `where` argument doesn't exist, create a new PurohitAvailability with this data.
     */
    create: XOR<PurohitAvailabilityCreateInput, PurohitAvailabilityUncheckedCreateInput>
    /**
     * In case the PurohitAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurohitAvailabilityUpdateInput, PurohitAvailabilityUncheckedUpdateInput>
  }

  /**
   * PurohitAvailability delete
   */
  export type PurohitAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitAvailability
     */
    select?: PurohitAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitAvailability
     */
    omit?: PurohitAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which PurohitAvailability to delete.
     */
    where: PurohitAvailabilityWhereUniqueInput
  }

  /**
   * PurohitAvailability deleteMany
   */
  export type PurohitAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurohitAvailabilities to delete
     */
    where?: PurohitAvailabilityWhereInput
    /**
     * Limit how many PurohitAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * PurohitAvailability without action
   */
  export type PurohitAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitAvailability
     */
    select?: PurohitAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitAvailability
     */
    omit?: PurohitAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model PurohitServiceLink
   */

  export type AggregatePurohitServiceLink = {
    _count: PurohitServiceLinkCountAggregateOutputType | null
    _avg: PurohitServiceLinkAvgAggregateOutputType | null
    _sum: PurohitServiceLinkSumAggregateOutputType | null
    _min: PurohitServiceLinkMinAggregateOutputType | null
    _max: PurohitServiceLinkMaxAggregateOutputType | null
  }

  export type PurohitServiceLinkAvgAggregateOutputType = {
    purohit_id: number | null
    service_id: number | null
  }

  export type PurohitServiceLinkSumAggregateOutputType = {
    purohit_id: number | null
    service_id: number | null
  }

  export type PurohitServiceLinkMinAggregateOutputType = {
    purohit_id: number | null
    service_id: number | null
  }

  export type PurohitServiceLinkMaxAggregateOutputType = {
    purohit_id: number | null
    service_id: number | null
  }

  export type PurohitServiceLinkCountAggregateOutputType = {
    purohit_id: number
    service_id: number
    _all: number
  }


  export type PurohitServiceLinkAvgAggregateInputType = {
    purohit_id?: true
    service_id?: true
  }

  export type PurohitServiceLinkSumAggregateInputType = {
    purohit_id?: true
    service_id?: true
  }

  export type PurohitServiceLinkMinAggregateInputType = {
    purohit_id?: true
    service_id?: true
  }

  export type PurohitServiceLinkMaxAggregateInputType = {
    purohit_id?: true
    service_id?: true
  }

  export type PurohitServiceLinkCountAggregateInputType = {
    purohit_id?: true
    service_id?: true
    _all?: true
  }

  export type PurohitServiceLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurohitServiceLink to aggregate.
     */
    where?: PurohitServiceLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurohitServiceLinks to fetch.
     */
    orderBy?: PurohitServiceLinkOrderByWithRelationInput | PurohitServiceLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurohitServiceLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurohitServiceLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurohitServiceLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurohitServiceLinks
    **/
    _count?: true | PurohitServiceLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurohitServiceLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurohitServiceLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurohitServiceLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurohitServiceLinkMaxAggregateInputType
  }

  export type GetPurohitServiceLinkAggregateType<T extends PurohitServiceLinkAggregateArgs> = {
        [P in keyof T & keyof AggregatePurohitServiceLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurohitServiceLink[P]>
      : GetScalarType<T[P], AggregatePurohitServiceLink[P]>
  }




  export type PurohitServiceLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurohitServiceLinkWhereInput
    orderBy?: PurohitServiceLinkOrderByWithAggregationInput | PurohitServiceLinkOrderByWithAggregationInput[]
    by: PurohitServiceLinkScalarFieldEnum[] | PurohitServiceLinkScalarFieldEnum
    having?: PurohitServiceLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurohitServiceLinkCountAggregateInputType | true
    _avg?: PurohitServiceLinkAvgAggregateInputType
    _sum?: PurohitServiceLinkSumAggregateInputType
    _min?: PurohitServiceLinkMinAggregateInputType
    _max?: PurohitServiceLinkMaxAggregateInputType
  }

  export type PurohitServiceLinkGroupByOutputType = {
    purohit_id: number
    service_id: number
    _count: PurohitServiceLinkCountAggregateOutputType | null
    _avg: PurohitServiceLinkAvgAggregateOutputType | null
    _sum: PurohitServiceLinkSumAggregateOutputType | null
    _min: PurohitServiceLinkMinAggregateOutputType | null
    _max: PurohitServiceLinkMaxAggregateOutputType | null
  }

  type GetPurohitServiceLinkGroupByPayload<T extends PurohitServiceLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurohitServiceLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurohitServiceLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurohitServiceLinkGroupByOutputType[P]>
            : GetScalarType<T[P], PurohitServiceLinkGroupByOutputType[P]>
        }
      >
    >


  export type PurohitServiceLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purohit_id?: boolean
    service_id?: boolean
    purohit?: boolean | PurohitDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purohitServiceLink"]>



  export type PurohitServiceLinkSelectScalar = {
    purohit_id?: boolean
    service_id?: boolean
  }

  export type PurohitServiceLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"purohit_id" | "service_id", ExtArgs["result"]["purohitServiceLink"]>
  export type PurohitServiceLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purohit?: boolean | PurohitDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $PurohitServiceLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurohitServiceLink"
    objects: {
      purohit: Prisma.$PurohitPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      purohit_id: number
      service_id: number
    }, ExtArgs["result"]["purohitServiceLink"]>
    composites: {}
  }

  type PurohitServiceLinkGetPayload<S extends boolean | null | undefined | PurohitServiceLinkDefaultArgs> = $Result.GetResult<Prisma.$PurohitServiceLinkPayload, S>

  type PurohitServiceLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurohitServiceLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurohitServiceLinkCountAggregateInputType | true
    }

  export interface PurohitServiceLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurohitServiceLink'], meta: { name: 'PurohitServiceLink' } }
    /**
     * Find zero or one PurohitServiceLink that matches the filter.
     * @param {PurohitServiceLinkFindUniqueArgs} args - Arguments to find a PurohitServiceLink
     * @example
     * // Get one PurohitServiceLink
     * const purohitServiceLink = await prisma.purohitServiceLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurohitServiceLinkFindUniqueArgs>(args: SelectSubset<T, PurohitServiceLinkFindUniqueArgs<ExtArgs>>): Prisma__PurohitServiceLinkClient<$Result.GetResult<Prisma.$PurohitServiceLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurohitServiceLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurohitServiceLinkFindUniqueOrThrowArgs} args - Arguments to find a PurohitServiceLink
     * @example
     * // Get one PurohitServiceLink
     * const purohitServiceLink = await prisma.purohitServiceLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurohitServiceLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, PurohitServiceLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurohitServiceLinkClient<$Result.GetResult<Prisma.$PurohitServiceLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurohitServiceLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitServiceLinkFindFirstArgs} args - Arguments to find a PurohitServiceLink
     * @example
     * // Get one PurohitServiceLink
     * const purohitServiceLink = await prisma.purohitServiceLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurohitServiceLinkFindFirstArgs>(args?: SelectSubset<T, PurohitServiceLinkFindFirstArgs<ExtArgs>>): Prisma__PurohitServiceLinkClient<$Result.GetResult<Prisma.$PurohitServiceLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurohitServiceLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitServiceLinkFindFirstOrThrowArgs} args - Arguments to find a PurohitServiceLink
     * @example
     * // Get one PurohitServiceLink
     * const purohitServiceLink = await prisma.purohitServiceLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurohitServiceLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, PurohitServiceLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurohitServiceLinkClient<$Result.GetResult<Prisma.$PurohitServiceLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurohitServiceLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitServiceLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurohitServiceLinks
     * const purohitServiceLinks = await prisma.purohitServiceLink.findMany()
     * 
     * // Get first 10 PurohitServiceLinks
     * const purohitServiceLinks = await prisma.purohitServiceLink.findMany({ take: 10 })
     * 
     * // Only select the `purohit_id`
     * const purohitServiceLinkWithPurohit_idOnly = await prisma.purohitServiceLink.findMany({ select: { purohit_id: true } })
     * 
     */
    findMany<T extends PurohitServiceLinkFindManyArgs>(args?: SelectSubset<T, PurohitServiceLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurohitServiceLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurohitServiceLink.
     * @param {PurohitServiceLinkCreateArgs} args - Arguments to create a PurohitServiceLink.
     * @example
     * // Create one PurohitServiceLink
     * const PurohitServiceLink = await prisma.purohitServiceLink.create({
     *   data: {
     *     // ... data to create a PurohitServiceLink
     *   }
     * })
     * 
     */
    create<T extends PurohitServiceLinkCreateArgs>(args: SelectSubset<T, PurohitServiceLinkCreateArgs<ExtArgs>>): Prisma__PurohitServiceLinkClient<$Result.GetResult<Prisma.$PurohitServiceLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurohitServiceLinks.
     * @param {PurohitServiceLinkCreateManyArgs} args - Arguments to create many PurohitServiceLinks.
     * @example
     * // Create many PurohitServiceLinks
     * const purohitServiceLink = await prisma.purohitServiceLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurohitServiceLinkCreateManyArgs>(args?: SelectSubset<T, PurohitServiceLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PurohitServiceLink.
     * @param {PurohitServiceLinkDeleteArgs} args - Arguments to delete one PurohitServiceLink.
     * @example
     * // Delete one PurohitServiceLink
     * const PurohitServiceLink = await prisma.purohitServiceLink.delete({
     *   where: {
     *     // ... filter to delete one PurohitServiceLink
     *   }
     * })
     * 
     */
    delete<T extends PurohitServiceLinkDeleteArgs>(args: SelectSubset<T, PurohitServiceLinkDeleteArgs<ExtArgs>>): Prisma__PurohitServiceLinkClient<$Result.GetResult<Prisma.$PurohitServiceLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurohitServiceLink.
     * @param {PurohitServiceLinkUpdateArgs} args - Arguments to update one PurohitServiceLink.
     * @example
     * // Update one PurohitServiceLink
     * const purohitServiceLink = await prisma.purohitServiceLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurohitServiceLinkUpdateArgs>(args: SelectSubset<T, PurohitServiceLinkUpdateArgs<ExtArgs>>): Prisma__PurohitServiceLinkClient<$Result.GetResult<Prisma.$PurohitServiceLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurohitServiceLinks.
     * @param {PurohitServiceLinkDeleteManyArgs} args - Arguments to filter PurohitServiceLinks to delete.
     * @example
     * // Delete a few PurohitServiceLinks
     * const { count } = await prisma.purohitServiceLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurohitServiceLinkDeleteManyArgs>(args?: SelectSubset<T, PurohitServiceLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurohitServiceLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitServiceLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurohitServiceLinks
     * const purohitServiceLink = await prisma.purohitServiceLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurohitServiceLinkUpdateManyArgs>(args: SelectSubset<T, PurohitServiceLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PurohitServiceLink.
     * @param {PurohitServiceLinkUpsertArgs} args - Arguments to update or create a PurohitServiceLink.
     * @example
     * // Update or create a PurohitServiceLink
     * const purohitServiceLink = await prisma.purohitServiceLink.upsert({
     *   create: {
     *     // ... data to create a PurohitServiceLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurohitServiceLink we want to update
     *   }
     * })
     */
    upsert<T extends PurohitServiceLinkUpsertArgs>(args: SelectSubset<T, PurohitServiceLinkUpsertArgs<ExtArgs>>): Prisma__PurohitServiceLinkClient<$Result.GetResult<Prisma.$PurohitServiceLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurohitServiceLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitServiceLinkCountArgs} args - Arguments to filter PurohitServiceLinks to count.
     * @example
     * // Count the number of PurohitServiceLinks
     * const count = await prisma.purohitServiceLink.count({
     *   where: {
     *     // ... the filter for the PurohitServiceLinks we want to count
     *   }
     * })
    **/
    count<T extends PurohitServiceLinkCountArgs>(
      args?: Subset<T, PurohitServiceLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurohitServiceLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurohitServiceLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitServiceLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurohitServiceLinkAggregateArgs>(args: Subset<T, PurohitServiceLinkAggregateArgs>): Prisma.PrismaPromise<GetPurohitServiceLinkAggregateType<T>>

    /**
     * Group by PurohitServiceLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurohitServiceLinkGroupByArgs} args - Group by arguments.
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
      T extends PurohitServiceLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurohitServiceLinkGroupByArgs['orderBy'] }
        : { orderBy?: PurohitServiceLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurohitServiceLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurohitServiceLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurohitServiceLink model
   */
  readonly fields: PurohitServiceLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurohitServiceLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurohitServiceLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purohit<T extends PurohitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurohitDefaultArgs<ExtArgs>>): Prisma__PurohitClient<$Result.GetResult<Prisma.$PurohitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PurohitServiceLink model
   */
  interface PurohitServiceLinkFieldRefs {
    readonly purohit_id: FieldRef<"PurohitServiceLink", 'Int'>
    readonly service_id: FieldRef<"PurohitServiceLink", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PurohitServiceLink findUnique
   */
  export type PurohitServiceLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitServiceLink
     */
    select?: PurohitServiceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitServiceLink
     */
    omit?: PurohitServiceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitServiceLinkInclude<ExtArgs> | null
    /**
     * Filter, which PurohitServiceLink to fetch.
     */
    where: PurohitServiceLinkWhereUniqueInput
  }

  /**
   * PurohitServiceLink findUniqueOrThrow
   */
  export type PurohitServiceLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitServiceLink
     */
    select?: PurohitServiceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitServiceLink
     */
    omit?: PurohitServiceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitServiceLinkInclude<ExtArgs> | null
    /**
     * Filter, which PurohitServiceLink to fetch.
     */
    where: PurohitServiceLinkWhereUniqueInput
  }

  /**
   * PurohitServiceLink findFirst
   */
  export type PurohitServiceLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitServiceLink
     */
    select?: PurohitServiceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitServiceLink
     */
    omit?: PurohitServiceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitServiceLinkInclude<ExtArgs> | null
    /**
     * Filter, which PurohitServiceLink to fetch.
     */
    where?: PurohitServiceLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurohitServiceLinks to fetch.
     */
    orderBy?: PurohitServiceLinkOrderByWithRelationInput | PurohitServiceLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurohitServiceLinks.
     */
    cursor?: PurohitServiceLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurohitServiceLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurohitServiceLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurohitServiceLinks.
     */
    distinct?: PurohitServiceLinkScalarFieldEnum | PurohitServiceLinkScalarFieldEnum[]
  }

  /**
   * PurohitServiceLink findFirstOrThrow
   */
  export type PurohitServiceLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitServiceLink
     */
    select?: PurohitServiceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitServiceLink
     */
    omit?: PurohitServiceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitServiceLinkInclude<ExtArgs> | null
    /**
     * Filter, which PurohitServiceLink to fetch.
     */
    where?: PurohitServiceLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurohitServiceLinks to fetch.
     */
    orderBy?: PurohitServiceLinkOrderByWithRelationInput | PurohitServiceLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurohitServiceLinks.
     */
    cursor?: PurohitServiceLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurohitServiceLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurohitServiceLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurohitServiceLinks.
     */
    distinct?: PurohitServiceLinkScalarFieldEnum | PurohitServiceLinkScalarFieldEnum[]
  }

  /**
   * PurohitServiceLink findMany
   */
  export type PurohitServiceLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitServiceLink
     */
    select?: PurohitServiceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitServiceLink
     */
    omit?: PurohitServiceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitServiceLinkInclude<ExtArgs> | null
    /**
     * Filter, which PurohitServiceLinks to fetch.
     */
    where?: PurohitServiceLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurohitServiceLinks to fetch.
     */
    orderBy?: PurohitServiceLinkOrderByWithRelationInput | PurohitServiceLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurohitServiceLinks.
     */
    cursor?: PurohitServiceLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurohitServiceLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurohitServiceLinks.
     */
    skip?: number
    distinct?: PurohitServiceLinkScalarFieldEnum | PurohitServiceLinkScalarFieldEnum[]
  }

  /**
   * PurohitServiceLink create
   */
  export type PurohitServiceLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitServiceLink
     */
    select?: PurohitServiceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitServiceLink
     */
    omit?: PurohitServiceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitServiceLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a PurohitServiceLink.
     */
    data: XOR<PurohitServiceLinkCreateInput, PurohitServiceLinkUncheckedCreateInput>
  }

  /**
   * PurohitServiceLink createMany
   */
  export type PurohitServiceLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurohitServiceLinks.
     */
    data: PurohitServiceLinkCreateManyInput | PurohitServiceLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurohitServiceLink update
   */
  export type PurohitServiceLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitServiceLink
     */
    select?: PurohitServiceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitServiceLink
     */
    omit?: PurohitServiceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitServiceLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a PurohitServiceLink.
     */
    data: XOR<PurohitServiceLinkUpdateInput, PurohitServiceLinkUncheckedUpdateInput>
    /**
     * Choose, which PurohitServiceLink to update.
     */
    where: PurohitServiceLinkWhereUniqueInput
  }

  /**
   * PurohitServiceLink updateMany
   */
  export type PurohitServiceLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurohitServiceLinks.
     */
    data: XOR<PurohitServiceLinkUpdateManyMutationInput, PurohitServiceLinkUncheckedUpdateManyInput>
    /**
     * Filter which PurohitServiceLinks to update
     */
    where?: PurohitServiceLinkWhereInput
    /**
     * Limit how many PurohitServiceLinks to update.
     */
    limit?: number
  }

  /**
   * PurohitServiceLink upsert
   */
  export type PurohitServiceLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitServiceLink
     */
    select?: PurohitServiceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitServiceLink
     */
    omit?: PurohitServiceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitServiceLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the PurohitServiceLink to update in case it exists.
     */
    where: PurohitServiceLinkWhereUniqueInput
    /**
     * In case the PurohitServiceLink found by the `where` argument doesn't exist, create a new PurohitServiceLink with this data.
     */
    create: XOR<PurohitServiceLinkCreateInput, PurohitServiceLinkUncheckedCreateInput>
    /**
     * In case the PurohitServiceLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurohitServiceLinkUpdateInput, PurohitServiceLinkUncheckedUpdateInput>
  }

  /**
   * PurohitServiceLink delete
   */
  export type PurohitServiceLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitServiceLink
     */
    select?: PurohitServiceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitServiceLink
     */
    omit?: PurohitServiceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitServiceLinkInclude<ExtArgs> | null
    /**
     * Filter which PurohitServiceLink to delete.
     */
    where: PurohitServiceLinkWhereUniqueInput
  }

  /**
   * PurohitServiceLink deleteMany
   */
  export type PurohitServiceLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurohitServiceLinks to delete
     */
    where?: PurohitServiceLinkWhereInput
    /**
     * Limit how many PurohitServiceLinks to delete.
     */
    limit?: number
  }

  /**
   * PurohitServiceLink without action
   */
  export type PurohitServiceLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurohitServiceLink
     */
    select?: PurohitServiceLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurohitServiceLink
     */
    omit?: PurohitServiceLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurohitServiceLinkInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    firebase_uid: 'firebase_uid',
    email: 'email',
    name: 'name',
    phone_number: 'phone_number',
    role: 'role',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PurohitScalarFieldEnum: {
    user_id: 'user_id',
    bio: 'bio',
    city: 'city',
    rating: 'rating',
    is_verified: 'is_verified'
  };

  export type PurohitScalarFieldEnum = (typeof PurohitScalarFieldEnum)[keyof typeof PurohitScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    duration_minutes: 'duration_minutes',
    price: 'price',
    created_at: 'created_at'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    purohit_id: 'purohit_id',
    service_id: 'service_id',
    start_time: 'start_time',
    end_time: 'end_time',
    location_address: 'location_address',
    total_price: 'total_price',
    status: 'status',
    created_at: 'created_at'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const PurohitAvailabilityScalarFieldEnum: {
    id: 'id',
    purohit_id: 'purohit_id',
    start_time: 'start_time',
    end_time: 'end_time',
    is_available: 'is_available'
  };

  export type PurohitAvailabilityScalarFieldEnum = (typeof PurohitAvailabilityScalarFieldEnum)[keyof typeof PurohitAvailabilityScalarFieldEnum]


  export const PurohitServiceLinkScalarFieldEnum: {
    purohit_id: 'purohit_id',
    service_id: 'service_id'
  };

  export type PurohitServiceLinkScalarFieldEnum = (typeof PurohitServiceLinkScalarFieldEnum)[keyof typeof PurohitServiceLinkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    firebase_uid: 'firebase_uid',
    email: 'email',
    name: 'name',
    phone_number: 'phone_number'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const PurohitOrderByRelevanceFieldEnum: {
    bio: 'bio',
    city: 'city'
  };

  export type PurohitOrderByRelevanceFieldEnum = (typeof PurohitOrderByRelevanceFieldEnum)[keyof typeof PurohitOrderByRelevanceFieldEnum]


  export const ServiceOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type ServiceOrderByRelevanceFieldEnum = (typeof ServiceOrderByRelevanceFieldEnum)[keyof typeof ServiceOrderByRelevanceFieldEnum]


  export const BookingOrderByRelevanceFieldEnum: {
    location_address: 'location_address'
  };

  export type BookingOrderByRelevanceFieldEnum = (typeof BookingOrderByRelevanceFieldEnum)[keyof typeof BookingOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firebase_uid?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone_number?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    created_at?: DateTimeFilter<"User"> | Date | string
    purohitProfile?: XOR<PurohitNullableScalarRelationFilter, PurohitWhereInput> | null
    bookings?: BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firebase_uid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    purohitProfile?: PurohitOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    firebase_uid?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phone_number?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    created_at?: DateTimeFilter<"User"> | Date | string
    purohitProfile?: XOR<PurohitNullableScalarRelationFilter, PurohitWhereInput> | null
    bookings?: BookingListRelationFilter
  }, "id" | "firebase_uid" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firebase_uid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firebase_uid?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    phone_number?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PurohitWhereInput = {
    AND?: PurohitWhereInput | PurohitWhereInput[]
    OR?: PurohitWhereInput[]
    NOT?: PurohitWhereInput | PurohitWhereInput[]
    user_id?: IntFilter<"Purohit"> | number
    bio?: StringNullableFilter<"Purohit"> | string | null
    city?: StringFilter<"Purohit"> | string
    rating?: DecimalFilter<"Purohit"> | Decimal | DecimalJsLike | number | string
    is_verified?: BoolFilter<"Purohit"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    availability?: PurohitAvailabilityListRelationFilter
    bookings?: BookingListRelationFilter
    servicesLink?: PurohitServiceLinkListRelationFilter
  }

  export type PurohitOrderByWithRelationInput = {
    user_id?: SortOrder
    bio?: SortOrderInput | SortOrder
    city?: SortOrder
    rating?: SortOrder
    is_verified?: SortOrder
    user?: UserOrderByWithRelationInput
    availability?: PurohitAvailabilityOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    servicesLink?: PurohitServiceLinkOrderByRelationAggregateInput
    _relevance?: PurohitOrderByRelevanceInput
  }

  export type PurohitWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    AND?: PurohitWhereInput | PurohitWhereInput[]
    OR?: PurohitWhereInput[]
    NOT?: PurohitWhereInput | PurohitWhereInput[]
    bio?: StringNullableFilter<"Purohit"> | string | null
    city?: StringFilter<"Purohit"> | string
    rating?: DecimalFilter<"Purohit"> | Decimal | DecimalJsLike | number | string
    is_verified?: BoolFilter<"Purohit"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    availability?: PurohitAvailabilityListRelationFilter
    bookings?: BookingListRelationFilter
    servicesLink?: PurohitServiceLinkListRelationFilter
  }, "user_id">

  export type PurohitOrderByWithAggregationInput = {
    user_id?: SortOrder
    bio?: SortOrderInput | SortOrder
    city?: SortOrder
    rating?: SortOrder
    is_verified?: SortOrder
    _count?: PurohitCountOrderByAggregateInput
    _avg?: PurohitAvgOrderByAggregateInput
    _max?: PurohitMaxOrderByAggregateInput
    _min?: PurohitMinOrderByAggregateInput
    _sum?: PurohitSumOrderByAggregateInput
  }

  export type PurohitScalarWhereWithAggregatesInput = {
    AND?: PurohitScalarWhereWithAggregatesInput | PurohitScalarWhereWithAggregatesInput[]
    OR?: PurohitScalarWhereWithAggregatesInput[]
    NOT?: PurohitScalarWhereWithAggregatesInput | PurohitScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"Purohit"> | number
    bio?: StringNullableWithAggregatesFilter<"Purohit"> | string | null
    city?: StringWithAggregatesFilter<"Purohit"> | string
    rating?: DecimalWithAggregatesFilter<"Purohit"> | Decimal | DecimalJsLike | number | string
    is_verified?: BoolWithAggregatesFilter<"Purohit"> | boolean
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    duration_minutes?: IntFilter<"Service"> | number
    price?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Service"> | Date | string
    bookings?: BookingListRelationFilter
    purohitsLink?: PurohitServiceLinkListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    duration_minutes?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    purohitsLink?: PurohitServiceLinkOrderByRelationAggregateInput
    _relevance?: ServiceOrderByRelevanceInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    description?: StringNullableFilter<"Service"> | string | null
    duration_minutes?: IntFilter<"Service"> | number
    price?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Service"> | Date | string
    bookings?: BookingListRelationFilter
    purohitsLink?: PurohitServiceLinkListRelationFilter
  }, "id" | "name">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    duration_minutes?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    duration_minutes?: IntWithAggregatesFilter<"Service"> | number
    price?: DecimalWithAggregatesFilter<"Service"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    user_id?: IntFilter<"Booking"> | number
    purohit_id?: IntFilter<"Booking"> | number
    service_id?: IntFilter<"Booking"> | number
    start_time?: DateTimeFilter<"Booking"> | Date | string
    end_time?: DateTimeFilter<"Booking"> | Date | string
    location_address?: StringFilter<"Booking"> | string
    total_price?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    created_at?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    purohit?: XOR<PurohitScalarRelationFilter, PurohitWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    purohit_id?: SortOrder
    service_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    location_address?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    purohit?: PurohitOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    _relevance?: BookingOrderByRelevanceInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    user_id?: IntFilter<"Booking"> | number
    purohit_id?: IntFilter<"Booking"> | number
    service_id?: IntFilter<"Booking"> | number
    start_time?: DateTimeFilter<"Booking"> | Date | string
    end_time?: DateTimeFilter<"Booking"> | Date | string
    location_address?: StringFilter<"Booking"> | string
    total_price?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    created_at?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    purohit?: XOR<PurohitScalarRelationFilter, PurohitWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    purohit_id?: SortOrder
    service_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    location_address?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    user_id?: IntWithAggregatesFilter<"Booking"> | number
    purohit_id?: IntWithAggregatesFilter<"Booking"> | number
    service_id?: IntWithAggregatesFilter<"Booking"> | number
    start_time?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    location_address?: StringWithAggregatesFilter<"Booking"> | string
    total_price?: DecimalWithAggregatesFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    created_at?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type PurohitAvailabilityWhereInput = {
    AND?: PurohitAvailabilityWhereInput | PurohitAvailabilityWhereInput[]
    OR?: PurohitAvailabilityWhereInput[]
    NOT?: PurohitAvailabilityWhereInput | PurohitAvailabilityWhereInput[]
    id?: IntFilter<"PurohitAvailability"> | number
    purohit_id?: IntFilter<"PurohitAvailability"> | number
    start_time?: DateTimeFilter<"PurohitAvailability"> | Date | string
    end_time?: DateTimeFilter<"PurohitAvailability"> | Date | string
    is_available?: BoolFilter<"PurohitAvailability"> | boolean
    purohit?: XOR<PurohitScalarRelationFilter, PurohitWhereInput>
  }

  export type PurohitAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    purohit_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_available?: SortOrder
    purohit?: PurohitOrderByWithRelationInput
  }

  export type PurohitAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PurohitAvailabilityWhereInput | PurohitAvailabilityWhereInput[]
    OR?: PurohitAvailabilityWhereInput[]
    NOT?: PurohitAvailabilityWhereInput | PurohitAvailabilityWhereInput[]
    purohit_id?: IntFilter<"PurohitAvailability"> | number
    start_time?: DateTimeFilter<"PurohitAvailability"> | Date | string
    end_time?: DateTimeFilter<"PurohitAvailability"> | Date | string
    is_available?: BoolFilter<"PurohitAvailability"> | boolean
    purohit?: XOR<PurohitScalarRelationFilter, PurohitWhereInput>
  }, "id">

  export type PurohitAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    purohit_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_available?: SortOrder
    _count?: PurohitAvailabilityCountOrderByAggregateInput
    _avg?: PurohitAvailabilityAvgOrderByAggregateInput
    _max?: PurohitAvailabilityMaxOrderByAggregateInput
    _min?: PurohitAvailabilityMinOrderByAggregateInput
    _sum?: PurohitAvailabilitySumOrderByAggregateInput
  }

  export type PurohitAvailabilityScalarWhereWithAggregatesInput = {
    AND?: PurohitAvailabilityScalarWhereWithAggregatesInput | PurohitAvailabilityScalarWhereWithAggregatesInput[]
    OR?: PurohitAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: PurohitAvailabilityScalarWhereWithAggregatesInput | PurohitAvailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PurohitAvailability"> | number
    purohit_id?: IntWithAggregatesFilter<"PurohitAvailability"> | number
    start_time?: DateTimeWithAggregatesFilter<"PurohitAvailability"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"PurohitAvailability"> | Date | string
    is_available?: BoolWithAggregatesFilter<"PurohitAvailability"> | boolean
  }

  export type PurohitServiceLinkWhereInput = {
    AND?: PurohitServiceLinkWhereInput | PurohitServiceLinkWhereInput[]
    OR?: PurohitServiceLinkWhereInput[]
    NOT?: PurohitServiceLinkWhereInput | PurohitServiceLinkWhereInput[]
    purohit_id?: IntFilter<"PurohitServiceLink"> | number
    service_id?: IntFilter<"PurohitServiceLink"> | number
    purohit?: XOR<PurohitScalarRelationFilter, PurohitWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type PurohitServiceLinkOrderByWithRelationInput = {
    purohit_id?: SortOrder
    service_id?: SortOrder
    purohit?: PurohitOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type PurohitServiceLinkWhereUniqueInput = Prisma.AtLeast<{
    purohit_id_service_id?: PurohitServiceLinkPurohit_idService_idCompoundUniqueInput
    AND?: PurohitServiceLinkWhereInput | PurohitServiceLinkWhereInput[]
    OR?: PurohitServiceLinkWhereInput[]
    NOT?: PurohitServiceLinkWhereInput | PurohitServiceLinkWhereInput[]
    purohit_id?: IntFilter<"PurohitServiceLink"> | number
    service_id?: IntFilter<"PurohitServiceLink"> | number
    purohit?: XOR<PurohitScalarRelationFilter, PurohitWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "purohit_id_service_id">

  export type PurohitServiceLinkOrderByWithAggregationInput = {
    purohit_id?: SortOrder
    service_id?: SortOrder
    _count?: PurohitServiceLinkCountOrderByAggregateInput
    _avg?: PurohitServiceLinkAvgOrderByAggregateInput
    _max?: PurohitServiceLinkMaxOrderByAggregateInput
    _min?: PurohitServiceLinkMinOrderByAggregateInput
    _sum?: PurohitServiceLinkSumOrderByAggregateInput
  }

  export type PurohitServiceLinkScalarWhereWithAggregatesInput = {
    AND?: PurohitServiceLinkScalarWhereWithAggregatesInput | PurohitServiceLinkScalarWhereWithAggregatesInput[]
    OR?: PurohitServiceLinkScalarWhereWithAggregatesInput[]
    NOT?: PurohitServiceLinkScalarWhereWithAggregatesInput | PurohitServiceLinkScalarWhereWithAggregatesInput[]
    purohit_id?: IntWithAggregatesFilter<"PurohitServiceLink"> | number
    service_id?: IntWithAggregatesFilter<"PurohitServiceLink"> | number
  }

  export type UserCreateInput = {
    firebase_uid: string
    email: string
    name: string
    phone_number?: string | null
    role?: $Enums.UserRole
    created_at?: Date | string
    purohitProfile?: PurohitCreateNestedOneWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firebase_uid: string
    email: string
    name: string
    phone_number?: string | null
    role?: $Enums.UserRole
    created_at?: Date | string
    purohitProfile?: PurohitUncheckedCreateNestedOneWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firebase_uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purohitProfile?: PurohitUpdateOneWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firebase_uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purohitProfile?: PurohitUncheckedUpdateOneWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firebase_uid: string
    email: string
    name: string
    phone_number?: string | null
    role?: $Enums.UserRole
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firebase_uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firebase_uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurohitCreateInput = {
    bio?: string | null
    city: string
    rating?: Decimal | DecimalJsLike | number | string
    is_verified?: boolean
    user: UserCreateNestedOneWithoutPurohitProfileInput
    availability?: PurohitAvailabilityCreateNestedManyWithoutPurohitInput
    bookings?: BookingCreateNestedManyWithoutPurohitInput
    servicesLink?: PurohitServiceLinkCreateNestedManyWithoutPurohitInput
  }

  export type PurohitUncheckedCreateInput = {
    user_id: number
    bio?: string | null
    city: string
    rating?: Decimal | DecimalJsLike | number | string
    is_verified?: boolean
    availability?: PurohitAvailabilityUncheckedCreateNestedManyWithoutPurohitInput
    bookings?: BookingUncheckedCreateNestedManyWithoutPurohitInput
    servicesLink?: PurohitServiceLinkUncheckedCreateNestedManyWithoutPurohitInput
  }

  export type PurohitUpdateInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPurohitProfileNestedInput
    availability?: PurohitAvailabilityUpdateManyWithoutPurohitNestedInput
    bookings?: BookingUpdateManyWithoutPurohitNestedInput
    servicesLink?: PurohitServiceLinkUpdateManyWithoutPurohitNestedInput
  }

  export type PurohitUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    availability?: PurohitAvailabilityUncheckedUpdateManyWithoutPurohitNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutPurohitNestedInput
    servicesLink?: PurohitServiceLinkUncheckedUpdateManyWithoutPurohitNestedInput
  }

  export type PurohitCreateManyInput = {
    user_id: number
    bio?: string | null
    city: string
    rating?: Decimal | DecimalJsLike | number | string
    is_verified?: boolean
  }

  export type PurohitUpdateManyMutationInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurohitUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceCreateInput = {
    name: string
    description?: string | null
    duration_minutes: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    bookings?: BookingCreateNestedManyWithoutServiceInput
    purohitsLink?: PurohitServiceLinkCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    duration_minutes: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
    purohitsLink?: PurohitServiceLinkUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutServiceNestedInput
    purohitsLink?: PurohitServiceLinkUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
    purohitsLink?: PurohitServiceLinkUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    duration_minutes: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    start_time: Date | string
    end_time: Date | string
    location_address: string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    created_at?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    purohit: PurohitCreateNestedOneWithoutBookingsInput
    service: ServiceCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    user_id: number
    purohit_id: number
    service_id: number
    start_time: Date | string
    end_time: Date | string
    location_address: string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    created_at?: Date | string
  }

  export type BookingUpdateInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_address?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    purohit?: PurohitUpdateOneRequiredWithoutBookingsNestedInput
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    purohit_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_address?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: number
    user_id: number
    purohit_id: number
    service_id: number
    start_time: Date | string
    end_time: Date | string
    location_address: string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    created_at?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_address?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    purohit_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_address?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurohitAvailabilityCreateInput = {
    start_time: Date | string
    end_time: Date | string
    is_available?: boolean
    purohit: PurohitCreateNestedOneWithoutAvailabilityInput
  }

  export type PurohitAvailabilityUncheckedCreateInput = {
    id?: number
    purohit_id: number
    start_time: Date | string
    end_time: Date | string
    is_available?: boolean
  }

  export type PurohitAvailabilityUpdateInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    purohit?: PurohitUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type PurohitAvailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    purohit_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurohitAvailabilityCreateManyInput = {
    id?: number
    purohit_id: number
    start_time: Date | string
    end_time: Date | string
    is_available?: boolean
  }

  export type PurohitAvailabilityUpdateManyMutationInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurohitAvailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    purohit_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurohitServiceLinkCreateInput = {
    purohit: PurohitCreateNestedOneWithoutServicesLinkInput
    service: ServiceCreateNestedOneWithoutPurohitsLinkInput
  }

  export type PurohitServiceLinkUncheckedCreateInput = {
    purohit_id: number
    service_id: number
  }

  export type PurohitServiceLinkUpdateInput = {
    purohit?: PurohitUpdateOneRequiredWithoutServicesLinkNestedInput
    service?: ServiceUpdateOneRequiredWithoutPurohitsLinkNestedInput
  }

  export type PurohitServiceLinkUncheckedUpdateInput = {
    purohit_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
  }

  export type PurohitServiceLinkCreateManyInput = {
    purohit_id: number
    service_id: number
  }

  export type PurohitServiceLinkUpdateManyMutationInput = {

  }

  export type PurohitServiceLinkUncheckedUpdateManyInput = {
    purohit_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PurohitNullableScalarRelationFilter = {
    is?: PurohitWhereInput | null
    isNot?: PurohitWhereInput | null
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firebase_uid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firebase_uid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firebase_uid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PurohitAvailabilityListRelationFilter = {
    every?: PurohitAvailabilityWhereInput
    some?: PurohitAvailabilityWhereInput
    none?: PurohitAvailabilityWhereInput
  }

  export type PurohitServiceLinkListRelationFilter = {
    every?: PurohitServiceLinkWhereInput
    some?: PurohitServiceLinkWhereInput
    none?: PurohitServiceLinkWhereInput
  }

  export type PurohitAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurohitServiceLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurohitOrderByRelevanceInput = {
    fields: PurohitOrderByRelevanceFieldEnum | PurohitOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PurohitCountOrderByAggregateInput = {
    user_id?: SortOrder
    bio?: SortOrder
    city?: SortOrder
    rating?: SortOrder
    is_verified?: SortOrder
  }

  export type PurohitAvgOrderByAggregateInput = {
    user_id?: SortOrder
    rating?: SortOrder
  }

  export type PurohitMaxOrderByAggregateInput = {
    user_id?: SortOrder
    bio?: SortOrder
    city?: SortOrder
    rating?: SortOrder
    is_verified?: SortOrder
  }

  export type PurohitMinOrderByAggregateInput = {
    user_id?: SortOrder
    bio?: SortOrder
    city?: SortOrder
    rating?: SortOrder
    is_verified?: SortOrder
  }

  export type PurohitSumOrderByAggregateInput = {
    user_id?: SortOrder
    rating?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ServiceOrderByRelevanceInput = {
    fields: ServiceOrderByRelevanceFieldEnum | ServiceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration_minutes?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    duration_minutes?: SortOrder
    price?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration_minutes?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration_minutes?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
    duration_minutes?: SortOrder
    price?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type PurohitScalarRelationFilter = {
    is?: PurohitWhereInput
    isNot?: PurohitWhereInput
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type BookingOrderByRelevanceInput = {
    fields: BookingOrderByRelevanceFieldEnum | BookingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    purohit_id?: SortOrder
    service_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    location_address?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    purohit_id?: SortOrder
    service_id?: SortOrder
    total_price?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    purohit_id?: SortOrder
    service_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    location_address?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    purohit_id?: SortOrder
    service_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    location_address?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    purohit_id?: SortOrder
    service_id?: SortOrder
    total_price?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type PurohitAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    purohit_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_available?: SortOrder
  }

  export type PurohitAvailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    purohit_id?: SortOrder
  }

  export type PurohitAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    purohit_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_available?: SortOrder
  }

  export type PurohitAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    purohit_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_available?: SortOrder
  }

  export type PurohitAvailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    purohit_id?: SortOrder
  }

  export type PurohitServiceLinkPurohit_idService_idCompoundUniqueInput = {
    purohit_id: number
    service_id: number
  }

  export type PurohitServiceLinkCountOrderByAggregateInput = {
    purohit_id?: SortOrder
    service_id?: SortOrder
  }

  export type PurohitServiceLinkAvgOrderByAggregateInput = {
    purohit_id?: SortOrder
    service_id?: SortOrder
  }

  export type PurohitServiceLinkMaxOrderByAggregateInput = {
    purohit_id?: SortOrder
    service_id?: SortOrder
  }

  export type PurohitServiceLinkMinOrderByAggregateInput = {
    purohit_id?: SortOrder
    service_id?: SortOrder
  }

  export type PurohitServiceLinkSumOrderByAggregateInput = {
    purohit_id?: SortOrder
    service_id?: SortOrder
  }

  export type PurohitCreateNestedOneWithoutUserInput = {
    create?: XOR<PurohitCreateWithoutUserInput, PurohitUncheckedCreateWithoutUserInput>
    connectOrCreate?: PurohitCreateOrConnectWithoutUserInput
    connect?: PurohitWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PurohitUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PurohitCreateWithoutUserInput, PurohitUncheckedCreateWithoutUserInput>
    connectOrCreate?: PurohitCreateOrConnectWithoutUserInput
    connect?: PurohitWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PurohitUpdateOneWithoutUserNestedInput = {
    create?: XOR<PurohitCreateWithoutUserInput, PurohitUncheckedCreateWithoutUserInput>
    connectOrCreate?: PurohitCreateOrConnectWithoutUserInput
    upsert?: PurohitUpsertWithoutUserInput
    disconnect?: PurohitWhereInput | boolean
    delete?: PurohitWhereInput | boolean
    connect?: PurohitWhereUniqueInput
    update?: XOR<XOR<PurohitUpdateToOneWithWhereWithoutUserInput, PurohitUpdateWithoutUserInput>, PurohitUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PurohitUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PurohitCreateWithoutUserInput, PurohitUncheckedCreateWithoutUserInput>
    connectOrCreate?: PurohitCreateOrConnectWithoutUserInput
    upsert?: PurohitUpsertWithoutUserInput
    disconnect?: PurohitWhereInput | boolean
    delete?: PurohitWhereInput | boolean
    connect?: PurohitWhereUniqueInput
    update?: XOR<XOR<PurohitUpdateToOneWithWhereWithoutUserInput, PurohitUpdateWithoutUserInput>, PurohitUncheckedUpdateWithoutUserInput>
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPurohitProfileInput = {
    create?: XOR<UserCreateWithoutPurohitProfileInput, UserUncheckedCreateWithoutPurohitProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurohitProfileInput
    connect?: UserWhereUniqueInput
  }

  export type PurohitAvailabilityCreateNestedManyWithoutPurohitInput = {
    create?: XOR<PurohitAvailabilityCreateWithoutPurohitInput, PurohitAvailabilityUncheckedCreateWithoutPurohitInput> | PurohitAvailabilityCreateWithoutPurohitInput[] | PurohitAvailabilityUncheckedCreateWithoutPurohitInput[]
    connectOrCreate?: PurohitAvailabilityCreateOrConnectWithoutPurohitInput | PurohitAvailabilityCreateOrConnectWithoutPurohitInput[]
    createMany?: PurohitAvailabilityCreateManyPurohitInputEnvelope
    connect?: PurohitAvailabilityWhereUniqueInput | PurohitAvailabilityWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutPurohitInput = {
    create?: XOR<BookingCreateWithoutPurohitInput, BookingUncheckedCreateWithoutPurohitInput> | BookingCreateWithoutPurohitInput[] | BookingUncheckedCreateWithoutPurohitInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPurohitInput | BookingCreateOrConnectWithoutPurohitInput[]
    createMany?: BookingCreateManyPurohitInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PurohitServiceLinkCreateNestedManyWithoutPurohitInput = {
    create?: XOR<PurohitServiceLinkCreateWithoutPurohitInput, PurohitServiceLinkUncheckedCreateWithoutPurohitInput> | PurohitServiceLinkCreateWithoutPurohitInput[] | PurohitServiceLinkUncheckedCreateWithoutPurohitInput[]
    connectOrCreate?: PurohitServiceLinkCreateOrConnectWithoutPurohitInput | PurohitServiceLinkCreateOrConnectWithoutPurohitInput[]
    createMany?: PurohitServiceLinkCreateManyPurohitInputEnvelope
    connect?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
  }

  export type PurohitAvailabilityUncheckedCreateNestedManyWithoutPurohitInput = {
    create?: XOR<PurohitAvailabilityCreateWithoutPurohitInput, PurohitAvailabilityUncheckedCreateWithoutPurohitInput> | PurohitAvailabilityCreateWithoutPurohitInput[] | PurohitAvailabilityUncheckedCreateWithoutPurohitInput[]
    connectOrCreate?: PurohitAvailabilityCreateOrConnectWithoutPurohitInput | PurohitAvailabilityCreateOrConnectWithoutPurohitInput[]
    createMany?: PurohitAvailabilityCreateManyPurohitInputEnvelope
    connect?: PurohitAvailabilityWhereUniqueInput | PurohitAvailabilityWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutPurohitInput = {
    create?: XOR<BookingCreateWithoutPurohitInput, BookingUncheckedCreateWithoutPurohitInput> | BookingCreateWithoutPurohitInput[] | BookingUncheckedCreateWithoutPurohitInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPurohitInput | BookingCreateOrConnectWithoutPurohitInput[]
    createMany?: BookingCreateManyPurohitInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PurohitServiceLinkUncheckedCreateNestedManyWithoutPurohitInput = {
    create?: XOR<PurohitServiceLinkCreateWithoutPurohitInput, PurohitServiceLinkUncheckedCreateWithoutPurohitInput> | PurohitServiceLinkCreateWithoutPurohitInput[] | PurohitServiceLinkUncheckedCreateWithoutPurohitInput[]
    connectOrCreate?: PurohitServiceLinkCreateOrConnectWithoutPurohitInput | PurohitServiceLinkCreateOrConnectWithoutPurohitInput[]
    createMany?: PurohitServiceLinkCreateManyPurohitInputEnvelope
    connect?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPurohitProfileNestedInput = {
    create?: XOR<UserCreateWithoutPurohitProfileInput, UserUncheckedCreateWithoutPurohitProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurohitProfileInput
    upsert?: UserUpsertWithoutPurohitProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurohitProfileInput, UserUpdateWithoutPurohitProfileInput>, UserUncheckedUpdateWithoutPurohitProfileInput>
  }

  export type PurohitAvailabilityUpdateManyWithoutPurohitNestedInput = {
    create?: XOR<PurohitAvailabilityCreateWithoutPurohitInput, PurohitAvailabilityUncheckedCreateWithoutPurohitInput> | PurohitAvailabilityCreateWithoutPurohitInput[] | PurohitAvailabilityUncheckedCreateWithoutPurohitInput[]
    connectOrCreate?: PurohitAvailabilityCreateOrConnectWithoutPurohitInput | PurohitAvailabilityCreateOrConnectWithoutPurohitInput[]
    upsert?: PurohitAvailabilityUpsertWithWhereUniqueWithoutPurohitInput | PurohitAvailabilityUpsertWithWhereUniqueWithoutPurohitInput[]
    createMany?: PurohitAvailabilityCreateManyPurohitInputEnvelope
    set?: PurohitAvailabilityWhereUniqueInput | PurohitAvailabilityWhereUniqueInput[]
    disconnect?: PurohitAvailabilityWhereUniqueInput | PurohitAvailabilityWhereUniqueInput[]
    delete?: PurohitAvailabilityWhereUniqueInput | PurohitAvailabilityWhereUniqueInput[]
    connect?: PurohitAvailabilityWhereUniqueInput | PurohitAvailabilityWhereUniqueInput[]
    update?: PurohitAvailabilityUpdateWithWhereUniqueWithoutPurohitInput | PurohitAvailabilityUpdateWithWhereUniqueWithoutPurohitInput[]
    updateMany?: PurohitAvailabilityUpdateManyWithWhereWithoutPurohitInput | PurohitAvailabilityUpdateManyWithWhereWithoutPurohitInput[]
    deleteMany?: PurohitAvailabilityScalarWhereInput | PurohitAvailabilityScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutPurohitNestedInput = {
    create?: XOR<BookingCreateWithoutPurohitInput, BookingUncheckedCreateWithoutPurohitInput> | BookingCreateWithoutPurohitInput[] | BookingUncheckedCreateWithoutPurohitInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPurohitInput | BookingCreateOrConnectWithoutPurohitInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutPurohitInput | BookingUpsertWithWhereUniqueWithoutPurohitInput[]
    createMany?: BookingCreateManyPurohitInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutPurohitInput | BookingUpdateWithWhereUniqueWithoutPurohitInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutPurohitInput | BookingUpdateManyWithWhereWithoutPurohitInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PurohitServiceLinkUpdateManyWithoutPurohitNestedInput = {
    create?: XOR<PurohitServiceLinkCreateWithoutPurohitInput, PurohitServiceLinkUncheckedCreateWithoutPurohitInput> | PurohitServiceLinkCreateWithoutPurohitInput[] | PurohitServiceLinkUncheckedCreateWithoutPurohitInput[]
    connectOrCreate?: PurohitServiceLinkCreateOrConnectWithoutPurohitInput | PurohitServiceLinkCreateOrConnectWithoutPurohitInput[]
    upsert?: PurohitServiceLinkUpsertWithWhereUniqueWithoutPurohitInput | PurohitServiceLinkUpsertWithWhereUniqueWithoutPurohitInput[]
    createMany?: PurohitServiceLinkCreateManyPurohitInputEnvelope
    set?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
    disconnect?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
    delete?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
    connect?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
    update?: PurohitServiceLinkUpdateWithWhereUniqueWithoutPurohitInput | PurohitServiceLinkUpdateWithWhereUniqueWithoutPurohitInput[]
    updateMany?: PurohitServiceLinkUpdateManyWithWhereWithoutPurohitInput | PurohitServiceLinkUpdateManyWithWhereWithoutPurohitInput[]
    deleteMany?: PurohitServiceLinkScalarWhereInput | PurohitServiceLinkScalarWhereInput[]
  }

  export type PurohitAvailabilityUncheckedUpdateManyWithoutPurohitNestedInput = {
    create?: XOR<PurohitAvailabilityCreateWithoutPurohitInput, PurohitAvailabilityUncheckedCreateWithoutPurohitInput> | PurohitAvailabilityCreateWithoutPurohitInput[] | PurohitAvailabilityUncheckedCreateWithoutPurohitInput[]
    connectOrCreate?: PurohitAvailabilityCreateOrConnectWithoutPurohitInput | PurohitAvailabilityCreateOrConnectWithoutPurohitInput[]
    upsert?: PurohitAvailabilityUpsertWithWhereUniqueWithoutPurohitInput | PurohitAvailabilityUpsertWithWhereUniqueWithoutPurohitInput[]
    createMany?: PurohitAvailabilityCreateManyPurohitInputEnvelope
    set?: PurohitAvailabilityWhereUniqueInput | PurohitAvailabilityWhereUniqueInput[]
    disconnect?: PurohitAvailabilityWhereUniqueInput | PurohitAvailabilityWhereUniqueInput[]
    delete?: PurohitAvailabilityWhereUniqueInput | PurohitAvailabilityWhereUniqueInput[]
    connect?: PurohitAvailabilityWhereUniqueInput | PurohitAvailabilityWhereUniqueInput[]
    update?: PurohitAvailabilityUpdateWithWhereUniqueWithoutPurohitInput | PurohitAvailabilityUpdateWithWhereUniqueWithoutPurohitInput[]
    updateMany?: PurohitAvailabilityUpdateManyWithWhereWithoutPurohitInput | PurohitAvailabilityUpdateManyWithWhereWithoutPurohitInput[]
    deleteMany?: PurohitAvailabilityScalarWhereInput | PurohitAvailabilityScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutPurohitNestedInput = {
    create?: XOR<BookingCreateWithoutPurohitInput, BookingUncheckedCreateWithoutPurohitInput> | BookingCreateWithoutPurohitInput[] | BookingUncheckedCreateWithoutPurohitInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPurohitInput | BookingCreateOrConnectWithoutPurohitInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutPurohitInput | BookingUpsertWithWhereUniqueWithoutPurohitInput[]
    createMany?: BookingCreateManyPurohitInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutPurohitInput | BookingUpdateWithWhereUniqueWithoutPurohitInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutPurohitInput | BookingUpdateManyWithWhereWithoutPurohitInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PurohitServiceLinkUncheckedUpdateManyWithoutPurohitNestedInput = {
    create?: XOR<PurohitServiceLinkCreateWithoutPurohitInput, PurohitServiceLinkUncheckedCreateWithoutPurohitInput> | PurohitServiceLinkCreateWithoutPurohitInput[] | PurohitServiceLinkUncheckedCreateWithoutPurohitInput[]
    connectOrCreate?: PurohitServiceLinkCreateOrConnectWithoutPurohitInput | PurohitServiceLinkCreateOrConnectWithoutPurohitInput[]
    upsert?: PurohitServiceLinkUpsertWithWhereUniqueWithoutPurohitInput | PurohitServiceLinkUpsertWithWhereUniqueWithoutPurohitInput[]
    createMany?: PurohitServiceLinkCreateManyPurohitInputEnvelope
    set?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
    disconnect?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
    delete?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
    connect?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
    update?: PurohitServiceLinkUpdateWithWhereUniqueWithoutPurohitInput | PurohitServiceLinkUpdateWithWhereUniqueWithoutPurohitInput[]
    updateMany?: PurohitServiceLinkUpdateManyWithWhereWithoutPurohitInput | PurohitServiceLinkUpdateManyWithWhereWithoutPurohitInput[]
    deleteMany?: PurohitServiceLinkScalarWhereInput | PurohitServiceLinkScalarWhereInput[]
  }

  export type BookingCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PurohitServiceLinkCreateNestedManyWithoutServiceInput = {
    create?: XOR<PurohitServiceLinkCreateWithoutServiceInput, PurohitServiceLinkUncheckedCreateWithoutServiceInput> | PurohitServiceLinkCreateWithoutServiceInput[] | PurohitServiceLinkUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: PurohitServiceLinkCreateOrConnectWithoutServiceInput | PurohitServiceLinkCreateOrConnectWithoutServiceInput[]
    createMany?: PurohitServiceLinkCreateManyServiceInputEnvelope
    connect?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PurohitServiceLinkUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<PurohitServiceLinkCreateWithoutServiceInput, PurohitServiceLinkUncheckedCreateWithoutServiceInput> | PurohitServiceLinkCreateWithoutServiceInput[] | PurohitServiceLinkUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: PurohitServiceLinkCreateOrConnectWithoutServiceInput | PurohitServiceLinkCreateOrConnectWithoutServiceInput[]
    createMany?: PurohitServiceLinkCreateManyServiceInputEnvelope
    connect?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
  }

  export type BookingUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServiceInput | BookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServiceInput | BookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServiceInput | BookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PurohitServiceLinkUpdateManyWithoutServiceNestedInput = {
    create?: XOR<PurohitServiceLinkCreateWithoutServiceInput, PurohitServiceLinkUncheckedCreateWithoutServiceInput> | PurohitServiceLinkCreateWithoutServiceInput[] | PurohitServiceLinkUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: PurohitServiceLinkCreateOrConnectWithoutServiceInput | PurohitServiceLinkCreateOrConnectWithoutServiceInput[]
    upsert?: PurohitServiceLinkUpsertWithWhereUniqueWithoutServiceInput | PurohitServiceLinkUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: PurohitServiceLinkCreateManyServiceInputEnvelope
    set?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
    disconnect?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
    delete?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
    connect?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
    update?: PurohitServiceLinkUpdateWithWhereUniqueWithoutServiceInput | PurohitServiceLinkUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: PurohitServiceLinkUpdateManyWithWhereWithoutServiceInput | PurohitServiceLinkUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: PurohitServiceLinkScalarWhereInput | PurohitServiceLinkScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServiceInput | BookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServiceInput | BookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServiceInput | BookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PurohitServiceLinkUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<PurohitServiceLinkCreateWithoutServiceInput, PurohitServiceLinkUncheckedCreateWithoutServiceInput> | PurohitServiceLinkCreateWithoutServiceInput[] | PurohitServiceLinkUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: PurohitServiceLinkCreateOrConnectWithoutServiceInput | PurohitServiceLinkCreateOrConnectWithoutServiceInput[]
    upsert?: PurohitServiceLinkUpsertWithWhereUniqueWithoutServiceInput | PurohitServiceLinkUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: PurohitServiceLinkCreateManyServiceInputEnvelope
    set?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
    disconnect?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
    delete?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
    connect?: PurohitServiceLinkWhereUniqueInput | PurohitServiceLinkWhereUniqueInput[]
    update?: PurohitServiceLinkUpdateWithWhereUniqueWithoutServiceInput | PurohitServiceLinkUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: PurohitServiceLinkUpdateManyWithWhereWithoutServiceInput | PurohitServiceLinkUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: PurohitServiceLinkScalarWhereInput | PurohitServiceLinkScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type PurohitCreateNestedOneWithoutBookingsInput = {
    create?: XOR<PurohitCreateWithoutBookingsInput, PurohitUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PurohitCreateOrConnectWithoutBookingsInput
    connect?: PurohitWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingsInput
    connect?: ServiceWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type PurohitUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<PurohitCreateWithoutBookingsInput, PurohitUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PurohitCreateOrConnectWithoutBookingsInput
    upsert?: PurohitUpsertWithoutBookingsInput
    connect?: PurohitWhereUniqueInput
    update?: XOR<XOR<PurohitUpdateToOneWithWhereWithoutBookingsInput, PurohitUpdateWithoutBookingsInput>, PurohitUncheckedUpdateWithoutBookingsInput>
  }

  export type ServiceUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingsInput
    upsert?: ServiceUpsertWithoutBookingsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutBookingsInput, ServiceUpdateWithoutBookingsInput>, ServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type PurohitCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<PurohitCreateWithoutAvailabilityInput, PurohitUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: PurohitCreateOrConnectWithoutAvailabilityInput
    connect?: PurohitWhereUniqueInput
  }

  export type PurohitUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<PurohitCreateWithoutAvailabilityInput, PurohitUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: PurohitCreateOrConnectWithoutAvailabilityInput
    upsert?: PurohitUpsertWithoutAvailabilityInput
    connect?: PurohitWhereUniqueInput
    update?: XOR<XOR<PurohitUpdateToOneWithWhereWithoutAvailabilityInput, PurohitUpdateWithoutAvailabilityInput>, PurohitUncheckedUpdateWithoutAvailabilityInput>
  }

  export type PurohitCreateNestedOneWithoutServicesLinkInput = {
    create?: XOR<PurohitCreateWithoutServicesLinkInput, PurohitUncheckedCreateWithoutServicesLinkInput>
    connectOrCreate?: PurohitCreateOrConnectWithoutServicesLinkInput
    connect?: PurohitWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutPurohitsLinkInput = {
    create?: XOR<ServiceCreateWithoutPurohitsLinkInput, ServiceUncheckedCreateWithoutPurohitsLinkInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutPurohitsLinkInput
    connect?: ServiceWhereUniqueInput
  }

  export type PurohitUpdateOneRequiredWithoutServicesLinkNestedInput = {
    create?: XOR<PurohitCreateWithoutServicesLinkInput, PurohitUncheckedCreateWithoutServicesLinkInput>
    connectOrCreate?: PurohitCreateOrConnectWithoutServicesLinkInput
    upsert?: PurohitUpsertWithoutServicesLinkInput
    connect?: PurohitWhereUniqueInput
    update?: XOR<XOR<PurohitUpdateToOneWithWhereWithoutServicesLinkInput, PurohitUpdateWithoutServicesLinkInput>, PurohitUncheckedUpdateWithoutServicesLinkInput>
  }

  export type ServiceUpdateOneRequiredWithoutPurohitsLinkNestedInput = {
    create?: XOR<ServiceCreateWithoutPurohitsLinkInput, ServiceUncheckedCreateWithoutPurohitsLinkInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutPurohitsLinkInput
    upsert?: ServiceUpsertWithoutPurohitsLinkInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutPurohitsLinkInput, ServiceUpdateWithoutPurohitsLinkInput>, ServiceUncheckedUpdateWithoutPurohitsLinkInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type PurohitCreateWithoutUserInput = {
    bio?: string | null
    city: string
    rating?: Decimal | DecimalJsLike | number | string
    is_verified?: boolean
    availability?: PurohitAvailabilityCreateNestedManyWithoutPurohitInput
    bookings?: BookingCreateNestedManyWithoutPurohitInput
    servicesLink?: PurohitServiceLinkCreateNestedManyWithoutPurohitInput
  }

  export type PurohitUncheckedCreateWithoutUserInput = {
    bio?: string | null
    city: string
    rating?: Decimal | DecimalJsLike | number | string
    is_verified?: boolean
    availability?: PurohitAvailabilityUncheckedCreateNestedManyWithoutPurohitInput
    bookings?: BookingUncheckedCreateNestedManyWithoutPurohitInput
    servicesLink?: PurohitServiceLinkUncheckedCreateNestedManyWithoutPurohitInput
  }

  export type PurohitCreateOrConnectWithoutUserInput = {
    where: PurohitWhereUniqueInput
    create: XOR<PurohitCreateWithoutUserInput, PurohitUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateWithoutUserInput = {
    start_time: Date | string
    end_time: Date | string
    location_address: string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    created_at?: Date | string
    purohit: PurohitCreateNestedOneWithoutBookingsInput
    service: ServiceCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: number
    purohit_id: number
    service_id: number
    start_time: Date | string
    end_time: Date | string
    location_address: string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    created_at?: Date | string
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PurohitUpsertWithoutUserInput = {
    update: XOR<PurohitUpdateWithoutUserInput, PurohitUncheckedUpdateWithoutUserInput>
    create: XOR<PurohitCreateWithoutUserInput, PurohitUncheckedCreateWithoutUserInput>
    where?: PurohitWhereInput
  }

  export type PurohitUpdateToOneWithWhereWithoutUserInput = {
    where?: PurohitWhereInput
    data: XOR<PurohitUpdateWithoutUserInput, PurohitUncheckedUpdateWithoutUserInput>
  }

  export type PurohitUpdateWithoutUserInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    availability?: PurohitAvailabilityUpdateManyWithoutPurohitNestedInput
    bookings?: BookingUpdateManyWithoutPurohitNestedInput
    servicesLink?: PurohitServiceLinkUpdateManyWithoutPurohitNestedInput
  }

  export type PurohitUncheckedUpdateWithoutUserInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    availability?: PurohitAvailabilityUncheckedUpdateManyWithoutPurohitNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutPurohitNestedInput
    servicesLink?: PurohitServiceLinkUncheckedUpdateManyWithoutPurohitNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    user_id?: IntFilter<"Booking"> | number
    purohit_id?: IntFilter<"Booking"> | number
    service_id?: IntFilter<"Booking"> | number
    start_time?: DateTimeFilter<"Booking"> | Date | string
    end_time?: DateTimeFilter<"Booking"> | Date | string
    location_address?: StringFilter<"Booking"> | string
    total_price?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    created_at?: DateTimeFilter<"Booking"> | Date | string
  }

  export type UserCreateWithoutPurohitProfileInput = {
    firebase_uid: string
    email: string
    name: string
    phone_number?: string | null
    role?: $Enums.UserRole
    created_at?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurohitProfileInput = {
    id?: number
    firebase_uid: string
    email: string
    name: string
    phone_number?: string | null
    role?: $Enums.UserRole
    created_at?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurohitProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurohitProfileInput, UserUncheckedCreateWithoutPurohitProfileInput>
  }

  export type PurohitAvailabilityCreateWithoutPurohitInput = {
    start_time: Date | string
    end_time: Date | string
    is_available?: boolean
  }

  export type PurohitAvailabilityUncheckedCreateWithoutPurohitInput = {
    id?: number
    start_time: Date | string
    end_time: Date | string
    is_available?: boolean
  }

  export type PurohitAvailabilityCreateOrConnectWithoutPurohitInput = {
    where: PurohitAvailabilityWhereUniqueInput
    create: XOR<PurohitAvailabilityCreateWithoutPurohitInput, PurohitAvailabilityUncheckedCreateWithoutPurohitInput>
  }

  export type PurohitAvailabilityCreateManyPurohitInputEnvelope = {
    data: PurohitAvailabilityCreateManyPurohitInput | PurohitAvailabilityCreateManyPurohitInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutPurohitInput = {
    start_time: Date | string
    end_time: Date | string
    location_address: string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    created_at?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    service: ServiceCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutPurohitInput = {
    id?: number
    user_id: number
    service_id: number
    start_time: Date | string
    end_time: Date | string
    location_address: string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    created_at?: Date | string
  }

  export type BookingCreateOrConnectWithoutPurohitInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPurohitInput, BookingUncheckedCreateWithoutPurohitInput>
  }

  export type BookingCreateManyPurohitInputEnvelope = {
    data: BookingCreateManyPurohitInput | BookingCreateManyPurohitInput[]
    skipDuplicates?: boolean
  }

  export type PurohitServiceLinkCreateWithoutPurohitInput = {
    service: ServiceCreateNestedOneWithoutPurohitsLinkInput
  }

  export type PurohitServiceLinkUncheckedCreateWithoutPurohitInput = {
    service_id: number
  }

  export type PurohitServiceLinkCreateOrConnectWithoutPurohitInput = {
    where: PurohitServiceLinkWhereUniqueInput
    create: XOR<PurohitServiceLinkCreateWithoutPurohitInput, PurohitServiceLinkUncheckedCreateWithoutPurohitInput>
  }

  export type PurohitServiceLinkCreateManyPurohitInputEnvelope = {
    data: PurohitServiceLinkCreateManyPurohitInput | PurohitServiceLinkCreateManyPurohitInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPurohitProfileInput = {
    update: XOR<UserUpdateWithoutPurohitProfileInput, UserUncheckedUpdateWithoutPurohitProfileInput>
    create: XOR<UserCreateWithoutPurohitProfileInput, UserUncheckedCreateWithoutPurohitProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurohitProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurohitProfileInput, UserUncheckedUpdateWithoutPurohitProfileInput>
  }

  export type UserUpdateWithoutPurohitProfileInput = {
    firebase_uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurohitProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    firebase_uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PurohitAvailabilityUpsertWithWhereUniqueWithoutPurohitInput = {
    where: PurohitAvailabilityWhereUniqueInput
    update: XOR<PurohitAvailabilityUpdateWithoutPurohitInput, PurohitAvailabilityUncheckedUpdateWithoutPurohitInput>
    create: XOR<PurohitAvailabilityCreateWithoutPurohitInput, PurohitAvailabilityUncheckedCreateWithoutPurohitInput>
  }

  export type PurohitAvailabilityUpdateWithWhereUniqueWithoutPurohitInput = {
    where: PurohitAvailabilityWhereUniqueInput
    data: XOR<PurohitAvailabilityUpdateWithoutPurohitInput, PurohitAvailabilityUncheckedUpdateWithoutPurohitInput>
  }

  export type PurohitAvailabilityUpdateManyWithWhereWithoutPurohitInput = {
    where: PurohitAvailabilityScalarWhereInput
    data: XOR<PurohitAvailabilityUpdateManyMutationInput, PurohitAvailabilityUncheckedUpdateManyWithoutPurohitInput>
  }

  export type PurohitAvailabilityScalarWhereInput = {
    AND?: PurohitAvailabilityScalarWhereInput | PurohitAvailabilityScalarWhereInput[]
    OR?: PurohitAvailabilityScalarWhereInput[]
    NOT?: PurohitAvailabilityScalarWhereInput | PurohitAvailabilityScalarWhereInput[]
    id?: IntFilter<"PurohitAvailability"> | number
    purohit_id?: IntFilter<"PurohitAvailability"> | number
    start_time?: DateTimeFilter<"PurohitAvailability"> | Date | string
    end_time?: DateTimeFilter<"PurohitAvailability"> | Date | string
    is_available?: BoolFilter<"PurohitAvailability"> | boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutPurohitInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutPurohitInput, BookingUncheckedUpdateWithoutPurohitInput>
    create: XOR<BookingCreateWithoutPurohitInput, BookingUncheckedCreateWithoutPurohitInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutPurohitInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutPurohitInput, BookingUncheckedUpdateWithoutPurohitInput>
  }

  export type BookingUpdateManyWithWhereWithoutPurohitInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutPurohitInput>
  }

  export type PurohitServiceLinkUpsertWithWhereUniqueWithoutPurohitInput = {
    where: PurohitServiceLinkWhereUniqueInput
    update: XOR<PurohitServiceLinkUpdateWithoutPurohitInput, PurohitServiceLinkUncheckedUpdateWithoutPurohitInput>
    create: XOR<PurohitServiceLinkCreateWithoutPurohitInput, PurohitServiceLinkUncheckedCreateWithoutPurohitInput>
  }

  export type PurohitServiceLinkUpdateWithWhereUniqueWithoutPurohitInput = {
    where: PurohitServiceLinkWhereUniqueInput
    data: XOR<PurohitServiceLinkUpdateWithoutPurohitInput, PurohitServiceLinkUncheckedUpdateWithoutPurohitInput>
  }

  export type PurohitServiceLinkUpdateManyWithWhereWithoutPurohitInput = {
    where: PurohitServiceLinkScalarWhereInput
    data: XOR<PurohitServiceLinkUpdateManyMutationInput, PurohitServiceLinkUncheckedUpdateManyWithoutPurohitInput>
  }

  export type PurohitServiceLinkScalarWhereInput = {
    AND?: PurohitServiceLinkScalarWhereInput | PurohitServiceLinkScalarWhereInput[]
    OR?: PurohitServiceLinkScalarWhereInput[]
    NOT?: PurohitServiceLinkScalarWhereInput | PurohitServiceLinkScalarWhereInput[]
    purohit_id?: IntFilter<"PurohitServiceLink"> | number
    service_id?: IntFilter<"PurohitServiceLink"> | number
  }

  export type BookingCreateWithoutServiceInput = {
    start_time: Date | string
    end_time: Date | string
    location_address: string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    created_at?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    purohit: PurohitCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutServiceInput = {
    id?: number
    user_id: number
    purohit_id: number
    start_time: Date | string
    end_time: Date | string
    location_address: string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    created_at?: Date | string
  }

  export type BookingCreateOrConnectWithoutServiceInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingCreateManyServiceInputEnvelope = {
    data: BookingCreateManyServiceInput | BookingCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type PurohitServiceLinkCreateWithoutServiceInput = {
    purohit: PurohitCreateNestedOneWithoutServicesLinkInput
  }

  export type PurohitServiceLinkUncheckedCreateWithoutServiceInput = {
    purohit_id: number
  }

  export type PurohitServiceLinkCreateOrConnectWithoutServiceInput = {
    where: PurohitServiceLinkWhereUniqueInput
    create: XOR<PurohitServiceLinkCreateWithoutServiceInput, PurohitServiceLinkUncheckedCreateWithoutServiceInput>
  }

  export type PurohitServiceLinkCreateManyServiceInputEnvelope = {
    data: PurohitServiceLinkCreateManyServiceInput | PurohitServiceLinkCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutServiceInput, BookingUncheckedUpdateWithoutServiceInput>
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutServiceInput, BookingUncheckedUpdateWithoutServiceInput>
  }

  export type BookingUpdateManyWithWhereWithoutServiceInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutServiceInput>
  }

  export type PurohitServiceLinkUpsertWithWhereUniqueWithoutServiceInput = {
    where: PurohitServiceLinkWhereUniqueInput
    update: XOR<PurohitServiceLinkUpdateWithoutServiceInput, PurohitServiceLinkUncheckedUpdateWithoutServiceInput>
    create: XOR<PurohitServiceLinkCreateWithoutServiceInput, PurohitServiceLinkUncheckedCreateWithoutServiceInput>
  }

  export type PurohitServiceLinkUpdateWithWhereUniqueWithoutServiceInput = {
    where: PurohitServiceLinkWhereUniqueInput
    data: XOR<PurohitServiceLinkUpdateWithoutServiceInput, PurohitServiceLinkUncheckedUpdateWithoutServiceInput>
  }

  export type PurohitServiceLinkUpdateManyWithWhereWithoutServiceInput = {
    where: PurohitServiceLinkScalarWhereInput
    data: XOR<PurohitServiceLinkUpdateManyMutationInput, PurohitServiceLinkUncheckedUpdateManyWithoutServiceInput>
  }

  export type UserCreateWithoutBookingsInput = {
    firebase_uid: string
    email: string
    name: string
    phone_number?: string | null
    role?: $Enums.UserRole
    created_at?: Date | string
    purohitProfile?: PurohitCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: number
    firebase_uid: string
    email: string
    name: string
    phone_number?: string | null
    role?: $Enums.UserRole
    created_at?: Date | string
    purohitProfile?: PurohitUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type PurohitCreateWithoutBookingsInput = {
    bio?: string | null
    city: string
    rating?: Decimal | DecimalJsLike | number | string
    is_verified?: boolean
    user: UserCreateNestedOneWithoutPurohitProfileInput
    availability?: PurohitAvailabilityCreateNestedManyWithoutPurohitInput
    servicesLink?: PurohitServiceLinkCreateNestedManyWithoutPurohitInput
  }

  export type PurohitUncheckedCreateWithoutBookingsInput = {
    user_id: number
    bio?: string | null
    city: string
    rating?: Decimal | DecimalJsLike | number | string
    is_verified?: boolean
    availability?: PurohitAvailabilityUncheckedCreateNestedManyWithoutPurohitInput
    servicesLink?: PurohitServiceLinkUncheckedCreateNestedManyWithoutPurohitInput
  }

  export type PurohitCreateOrConnectWithoutBookingsInput = {
    where: PurohitWhereUniqueInput
    create: XOR<PurohitCreateWithoutBookingsInput, PurohitUncheckedCreateWithoutBookingsInput>
  }

  export type ServiceCreateWithoutBookingsInput = {
    name: string
    description?: string | null
    duration_minutes: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    purohitsLink?: PurohitServiceLinkCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutBookingsInput = {
    id?: number
    name: string
    description?: string | null
    duration_minutes: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    purohitsLink?: PurohitServiceLinkUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutBookingsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    firebase_uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purohitProfile?: PurohitUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firebase_uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purohitProfile?: PurohitUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PurohitUpsertWithoutBookingsInput = {
    update: XOR<PurohitUpdateWithoutBookingsInput, PurohitUncheckedUpdateWithoutBookingsInput>
    create: XOR<PurohitCreateWithoutBookingsInput, PurohitUncheckedCreateWithoutBookingsInput>
    where?: PurohitWhereInput
  }

  export type PurohitUpdateToOneWithWhereWithoutBookingsInput = {
    where?: PurohitWhereInput
    data: XOR<PurohitUpdateWithoutBookingsInput, PurohitUncheckedUpdateWithoutBookingsInput>
  }

  export type PurohitUpdateWithoutBookingsInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPurohitProfileNestedInput
    availability?: PurohitAvailabilityUpdateManyWithoutPurohitNestedInput
    servicesLink?: PurohitServiceLinkUpdateManyWithoutPurohitNestedInput
  }

  export type PurohitUncheckedUpdateWithoutBookingsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    availability?: PurohitAvailabilityUncheckedUpdateManyWithoutPurohitNestedInput
    servicesLink?: PurohitServiceLinkUncheckedUpdateManyWithoutPurohitNestedInput
  }

  export type ServiceUpsertWithoutBookingsInput = {
    update: XOR<ServiceUpdateWithoutBookingsInput, ServiceUncheckedUpdateWithoutBookingsInput>
    create: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutBookingsInput, ServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type ServiceUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purohitsLink?: PurohitServiceLinkUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purohitsLink?: PurohitServiceLinkUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type PurohitCreateWithoutAvailabilityInput = {
    bio?: string | null
    city: string
    rating?: Decimal | DecimalJsLike | number | string
    is_verified?: boolean
    user: UserCreateNestedOneWithoutPurohitProfileInput
    bookings?: BookingCreateNestedManyWithoutPurohitInput
    servicesLink?: PurohitServiceLinkCreateNestedManyWithoutPurohitInput
  }

  export type PurohitUncheckedCreateWithoutAvailabilityInput = {
    user_id: number
    bio?: string | null
    city: string
    rating?: Decimal | DecimalJsLike | number | string
    is_verified?: boolean
    bookings?: BookingUncheckedCreateNestedManyWithoutPurohitInput
    servicesLink?: PurohitServiceLinkUncheckedCreateNestedManyWithoutPurohitInput
  }

  export type PurohitCreateOrConnectWithoutAvailabilityInput = {
    where: PurohitWhereUniqueInput
    create: XOR<PurohitCreateWithoutAvailabilityInput, PurohitUncheckedCreateWithoutAvailabilityInput>
  }

  export type PurohitUpsertWithoutAvailabilityInput = {
    update: XOR<PurohitUpdateWithoutAvailabilityInput, PurohitUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<PurohitCreateWithoutAvailabilityInput, PurohitUncheckedCreateWithoutAvailabilityInput>
    where?: PurohitWhereInput
  }

  export type PurohitUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: PurohitWhereInput
    data: XOR<PurohitUpdateWithoutAvailabilityInput, PurohitUncheckedUpdateWithoutAvailabilityInput>
  }

  export type PurohitUpdateWithoutAvailabilityInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPurohitProfileNestedInput
    bookings?: BookingUpdateManyWithoutPurohitNestedInput
    servicesLink?: PurohitServiceLinkUpdateManyWithoutPurohitNestedInput
  }

  export type PurohitUncheckedUpdateWithoutAvailabilityInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    bookings?: BookingUncheckedUpdateManyWithoutPurohitNestedInput
    servicesLink?: PurohitServiceLinkUncheckedUpdateManyWithoutPurohitNestedInput
  }

  export type PurohitCreateWithoutServicesLinkInput = {
    bio?: string | null
    city: string
    rating?: Decimal | DecimalJsLike | number | string
    is_verified?: boolean
    user: UserCreateNestedOneWithoutPurohitProfileInput
    availability?: PurohitAvailabilityCreateNestedManyWithoutPurohitInput
    bookings?: BookingCreateNestedManyWithoutPurohitInput
  }

  export type PurohitUncheckedCreateWithoutServicesLinkInput = {
    user_id: number
    bio?: string | null
    city: string
    rating?: Decimal | DecimalJsLike | number | string
    is_verified?: boolean
    availability?: PurohitAvailabilityUncheckedCreateNestedManyWithoutPurohitInput
    bookings?: BookingUncheckedCreateNestedManyWithoutPurohitInput
  }

  export type PurohitCreateOrConnectWithoutServicesLinkInput = {
    where: PurohitWhereUniqueInput
    create: XOR<PurohitCreateWithoutServicesLinkInput, PurohitUncheckedCreateWithoutServicesLinkInput>
  }

  export type ServiceCreateWithoutPurohitsLinkInput = {
    name: string
    description?: string | null
    duration_minutes: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutPurohitsLinkInput = {
    id?: number
    name: string
    description?: string | null
    duration_minutes: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutPurohitsLinkInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutPurohitsLinkInput, ServiceUncheckedCreateWithoutPurohitsLinkInput>
  }

  export type PurohitUpsertWithoutServicesLinkInput = {
    update: XOR<PurohitUpdateWithoutServicesLinkInput, PurohitUncheckedUpdateWithoutServicesLinkInput>
    create: XOR<PurohitCreateWithoutServicesLinkInput, PurohitUncheckedCreateWithoutServicesLinkInput>
    where?: PurohitWhereInput
  }

  export type PurohitUpdateToOneWithWhereWithoutServicesLinkInput = {
    where?: PurohitWhereInput
    data: XOR<PurohitUpdateWithoutServicesLinkInput, PurohitUncheckedUpdateWithoutServicesLinkInput>
  }

  export type PurohitUpdateWithoutServicesLinkInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPurohitProfileNestedInput
    availability?: PurohitAvailabilityUpdateManyWithoutPurohitNestedInput
    bookings?: BookingUpdateManyWithoutPurohitNestedInput
  }

  export type PurohitUncheckedUpdateWithoutServicesLinkInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    availability?: PurohitAvailabilityUncheckedUpdateManyWithoutPurohitNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutPurohitNestedInput
  }

  export type ServiceUpsertWithoutPurohitsLinkInput = {
    update: XOR<ServiceUpdateWithoutPurohitsLinkInput, ServiceUncheckedUpdateWithoutPurohitsLinkInput>
    create: XOR<ServiceCreateWithoutPurohitsLinkInput, ServiceUncheckedCreateWithoutPurohitsLinkInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutPurohitsLinkInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutPurohitsLinkInput, ServiceUncheckedUpdateWithoutPurohitsLinkInput>
  }

  export type ServiceUpdateWithoutPurohitsLinkInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutPurohitsLinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type BookingCreateManyUserInput = {
    id?: number
    purohit_id: number
    service_id: number
    start_time: Date | string
    end_time: Date | string
    location_address: string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    created_at?: Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_address?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purohit?: PurohitUpdateOneRequiredWithoutBookingsNestedInput
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    purohit_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_address?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    purohit_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_address?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurohitAvailabilityCreateManyPurohitInput = {
    id?: number
    start_time: Date | string
    end_time: Date | string
    is_available?: boolean
  }

  export type BookingCreateManyPurohitInput = {
    id?: number
    user_id: number
    service_id: number
    start_time: Date | string
    end_time: Date | string
    location_address: string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    created_at?: Date | string
  }

  export type PurohitServiceLinkCreateManyPurohitInput = {
    service_id: number
  }

  export type PurohitAvailabilityUpdateWithoutPurohitInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurohitAvailabilityUncheckedUpdateWithoutPurohitInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurohitAvailabilityUncheckedUpdateManyWithoutPurohitInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookingUpdateWithoutPurohitInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_address?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutPurohitInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_address?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutPurohitInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_address?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurohitServiceLinkUpdateWithoutPurohitInput = {
    service?: ServiceUpdateOneRequiredWithoutPurohitsLinkNestedInput
  }

  export type PurohitServiceLinkUncheckedUpdateWithoutPurohitInput = {
    service_id?: IntFieldUpdateOperationsInput | number
  }

  export type PurohitServiceLinkUncheckedUpdateManyWithoutPurohitInput = {
    service_id?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateManyServiceInput = {
    id?: number
    user_id: number
    purohit_id: number
    start_time: Date | string
    end_time: Date | string
    location_address: string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    created_at?: Date | string
  }

  export type PurohitServiceLinkCreateManyServiceInput = {
    purohit_id: number
  }

  export type BookingUpdateWithoutServiceInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_address?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    purohit?: PurohitUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    purohit_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_address?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    purohit_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_address?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurohitServiceLinkUpdateWithoutServiceInput = {
    purohit?: PurohitUpdateOneRequiredWithoutServicesLinkNestedInput
  }

  export type PurohitServiceLinkUncheckedUpdateWithoutServiceInput = {
    purohit_id?: IntFieldUpdateOperationsInput | number
  }

  export type PurohitServiceLinkUncheckedUpdateManyWithoutServiceInput = {
    purohit_id?: IntFieldUpdateOperationsInput | number
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