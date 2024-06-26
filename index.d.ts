/// <reference types="node" />

import type {
  Term,
  NamedNode,
  BlankNode,
  Literal,
  Variable,
  DefaultGraph,
  Quad_Subject,
  Quad_Predicate,
  Quad_Object,
  Quad_Graph,
  BaseQuad,
  Quad,
  DataFactory,
} from './data-model.d.ts'

import type { Stream, Source, Sink, Store } from './stream.d.ts'

import type {
  DatasetCore,
  DatasetCoreFactory,
  Dataset,
  DatasetFactory,
} from './dataset.d.ts'

import type {
  QuadTermName,
  ResultStream,
  QueryOperationCost,
  QueryOperationOrder,
  QueryResultCardinality,
  BaseMetadataQuery,
  AllMetadataSupport,
  CardinalityMetadataSupport,
  OrderMetadataSupport,
  AvailableOrdersMetadataSupport,
  MetadataOpts,
  CardinalityMetadataOpts,
  OrderMetadataOpts,
  AvailableOrdersMetadataOpts,
  ConditionalMetadataType,
  QueryExecuteOptions,
  BaseQuery,
  QueryBindings,
  QueryQuads,
  QueryBoolean,
  QueryVoid,
  Query,
  Bindings,
  BindingsFactory,
} from './query/common.d.ts'

import type {
  QueryContext,
  QueryStringContext,
  QueryAlgebraContext,
  QuerySourceContext,
  QueryFormat,
  StringQueryable,
  AlgebraQueryable,
  StringSparqlQueryable,
  AlgebraSparqlQueryable,
  SparqlResultSupport,
  BindingsResultSupport,
  VoidResultSupport,
  QuadsResultSupport,
  BooleanResultSupport,
} from './query/queryable.d.ts'

export type {
  Term,
  NamedNode,
  BlankNode,
  Literal,
  Variable,
  DefaultGraph,
  Quad_Subject,
  Quad_Predicate,
  Quad_Object,
  Quad_Graph,
  BaseQuad,
  Quad,
  DataFactory,
  Stream,
  Source,
  Sink,
  Store,
  DatasetCore,
  DatasetCoreFactory,
  Dataset,
  DatasetFactory,
  QuadTermName,
  ResultStream,
  QueryOperationCost,
  QueryOperationOrder,
  QueryResultCardinality,
  BaseMetadataQuery,
  AllMetadataSupport,
  CardinalityMetadataSupport,
  OrderMetadataSupport,
  AvailableOrdersMetadataSupport,
  MetadataOpts,
  CardinalityMetadataOpts,
  OrderMetadataOpts,
  AvailableOrdersMetadataOpts,
  ConditionalMetadataType,
  QueryExecuteOptions,
  BaseQuery,
  QueryBindings,
  QueryQuads,
  QueryBoolean,
  QueryVoid,
  Query,
  Bindings,
  BindingsFactory,
  QueryContext,
  QueryStringContext,
  QueryAlgebraContext,
  QuerySourceContext,
  QueryFormat,
  StringQueryable,
  AlgebraQueryable,
  StringSparqlQueryable,
  AlgebraSparqlQueryable,
  SparqlResultSupport,
  BindingsResultSupport,
  VoidResultSupport,
  QuadsResultSupport,
  BooleanResultSupport,
}
