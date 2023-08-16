// proto3 で記述する

// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file chat/v1/chat.proto (package chat.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

// package は、ディレクトリ構造と同じにするのが一般的

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * 列挙型
 *
 * @generated from enum chat.v1.SayType
 */
export enum SayType {
  /**
   * 0 はデフォルト値
   * 0 がデフォルト値なので、0 は使わないようにする
   * これは Golang でも同じ?
   *
   * @generated from enum value: SAY_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * 1 から順に値が振られる
   *
   * @generated from enum value: SAY_TYPE_HELLO = 1;
   */
  HELLO = 1,

  /**
   * @generated from enum value: SAY_TYPE_BYE = 2;
   */
  BYE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(SayType)
proto3.util.setEnumType(SayType, "chat.v1.SayType", [
  { no: 0, name: "SAY_TYPE_UNSPECIFIED" },
  { no: 1, name: "SAY_TYPE_HELLO" },
  { no: 2, name: "SAY_TYPE_BYE" },
]);

/**
 * message は、データの構造を定義する
 * TypeScript では class で生成される
 *
 * @generated from message chat.v1.SayRequest
 */
export class SayRequest extends Message<SayRequest> {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence = "";

  /**
   * optional は省略可能なフィールド
   *
   * @generated from field: optional int32 number = 2;
   */
  number?: number;

  constructor(data?: PartialMessage<SayRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "chat.v1.SayRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sentence", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "number", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SayRequest {
    return new SayRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SayRequest {
    return new SayRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SayRequest {
    return new SayRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SayRequest | PlainMessage<SayRequest> | undefined, b: SayRequest | PlainMessage<SayRequest> | undefined): boolean {
    return proto3.util.equals(SayRequest, a, b);
  }
}

/**
 * @generated from message chat.v1.SayResponse
 */
export class SayResponse extends Message<SayResponse> {
  /**
   * repeated は配列
   *
   * @generated from field: repeated string sentence = 1;
   */
  sentence: string[] = [];

  /**
   * timestamp 型
   *
   * @generated from field: google.protobuf.Timestamp responded_at = 2;
   */
  respondedAt?: Timestamp;

  /**
   * enum 型
   *
   * @generated from field: chat.v1.SayType say_type = 5;
   */
  sayType = SayType.UNSPECIFIED;

  constructor(data?: PartialMessage<SayResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "chat.v1.SayResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sentence", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "responded_at", kind: "message", T: Timestamp },
    { no: 5, name: "say_type", kind: "enum", T: proto3.getEnumType(SayType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SayResponse {
    return new SayResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SayResponse {
    return new SayResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SayResponse {
    return new SayResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SayResponse | PlainMessage<SayResponse> | undefined, b: SayResponse | PlainMessage<SayResponse> | undefined): boolean {
    return proto3.util.equals(SayResponse, a, b);
  }
}
