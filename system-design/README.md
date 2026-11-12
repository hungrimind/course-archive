# System Design

Learn how APIs, databases, caching, and load balancing fit together to build scalable systems.

11 modules · 129 lessons · 7 coding challenges

[← All courses](../README.md)

## Contents

### 1. Core Concepts

- **System Design Basics**
  1. [What is System Design?](01-core-concepts/01-system-design-basics/01-what-is-system-design/README.md)
  2. [Goals of Design](01-core-concepts/01-system-design-basics/02-goals-of-design/README.md)
  3. [Functional Requirements](01-core-concepts/01-system-design-basics/03-functional-requirements/README.md)
  4. [Non-Functional Requirements](01-core-concepts/01-system-design-basics/04-non-functional-requirements/README.md)
  5. [Design Tradeoffs](01-core-concepts/01-system-design-basics/05-design-tradeoffs/README.md)
  6. [Design Steps](01-core-concepts/01-system-design-basics/06-design-steps/README.md)
  7. [TinyURL Overview](01-core-concepts/01-system-design-basics/07-tinyurl-overview/README.md)
- **Key Characteristics**
  1. [What is Scalability?](01-core-concepts/02-key-characteristics/01-what-is-scalability/README.md)
  2. [What is Availability?](01-core-concepts/02-key-characteristics/02-what-is-availability/README.md)
  3. [Reliability vs Availability](01-core-concepts/02-key-characteristics/03-reliability-vs-availability/README.md)
  4. [Latency vs Throughput](01-core-concepts/02-key-characteristics/04-latency-vs-throughput/README.md)
  5. [What is Consistency?](01-core-concepts/02-key-characteristics/05-what-is-consistency/README.md)
  6. [Review](01-core-concepts/02-key-characteristics/06-review/README.md)

### 2. Designing APIs

- **API Fundamentals**
  1. [What is an API?](02-designing-apis/01-api-fundamentals/01-what-is-an-api/README.md)
  2. [Client-Server Model](02-designing-apis/01-api-fundamentals/02-client-server-model/README.md)
  3. [API Contracts](02-designing-apis/01-api-fundamentals/03-api-contracts/README.md)
  4. [API Versioning](02-designing-apis/01-api-fundamentals/04-api-versioning/README.md)
  5. [Timeouts](02-designing-apis/01-api-fundamentals/05-timeouts/README.md)
  6. [Retries](02-designing-apis/01-api-fundamentals/06-retries/README.md)
  7. [Request and Response](02-designing-apis/01-api-fundamentals/07-request-and-response/README.md)
- **RESTful APIs**
  1. [What is REST?](02-designing-apis/02-restful-apis/01-what-is-rest/README.md)
  2. [Resources and URLs](02-designing-apis/02-restful-apis/02-resources-and-urls/README.md)
  3. [HTTP Verbs](02-designing-apis/02-restful-apis/03-http-verbs/README.md)
  4. [HTTP Status Codes](02-designing-apis/02-restful-apis/04-http-status-codes/README.md)
  5. [Pagination Basics](02-designing-apis/02-restful-apis/05-pagination-basics/README.md)
  6. [Filtering & Sorting](02-designing-apis/02-restful-apis/06-filtering-sorting/README.md)
  7. [Idempotent Operations](02-designing-apis/02-restful-apis/07-idempotent-operations/README.md)

### 3. Data Storage

- **Choosing a Database**
  1. [What is a Database?](03-data-storage/01-choosing-a-database/01-what-is-a-database/README.md)
  2. [Workload Types](03-data-storage/01-choosing-a-database/02-workload-types/README.md)
  3. [Access Patterns](03-data-storage/01-choosing-a-database/03-access-patterns/README.md)
  4. [Storage Decision Flow](03-data-storage/01-choosing-a-database/04-storage-decision-flow/README.md)
  5. [Model From Queries](03-data-storage/01-choosing-a-database/05-model-from-queries/README.md)
- **Relational Data**
  1. [Primary Keys](03-data-storage/02-relational-data/01-primary-keys/README.md)
  2. [What is a Schema?](03-data-storage/02-relational-data/02-what-is-a-schema/README.md)
  3. [Why Joins Exist](03-data-storage/02-relational-data/03-why-joins-exist/README.md)
  4. [Join vs Duplicate](03-data-storage/02-relational-data/04-join-vs-duplicate/README.md)
  5. [Transactions Basics](03-data-storage/02-relational-data/05-transactions-basics/README.md)
  6. [What is ACID?](03-data-storage/02-relational-data/06-what-is-acid/README.md)
  7. [When You Need ACID](03-data-storage/02-relational-data/07-when-you-need-acid/README.md)
  8. [Indexes Basics](03-data-storage/02-relational-data/08-indexes-basics/README.md)
  9. [Choose Indexes](03-data-storage/02-relational-data/09-choose-indexes/README.md)
  10. [SQL Use Cases](03-data-storage/02-relational-data/10-sql-use-cases/README.md)
- **Non-Relational Databases (NoSQL)**
  1. [Schema Flexibility](03-data-storage/03-non-relational-databases-nosql/01-schema-flexibility/README.md)
  2. [Key-Value Stores](03-data-storage/03-non-relational-databases-nosql/02-key-value-stores/README.md)
  3. [Document Databases](03-data-storage/03-non-relational-databases-nosql/03-document-databases/README.md)
  4. [Denormalization](03-data-storage/03-non-relational-databases-nosql/04-denormalization/README.md)
  5. [NoSQL Tradeoffs](03-data-storage/03-non-relational-databases-nosql/05-nosql-tradeoffs/README.md)
  6. [Pick NoSQL Type](03-data-storage/03-non-relational-databases-nosql/06-pick-nosql-type/README.md)
  7. [NoSQL Use Cases](03-data-storage/03-non-relational-databases-nosql/07-nosql-use-cases/README.md)

### 4. Scaling the System

- **Estimating & Bottlenecks**
  1. [Estimate QPS](04-scaling-the-system/01-estimating-bottlenecks/01-estimate-qps/README.md)
  2. [Capacity Planning](04-scaling-the-system/01-estimating-bottlenecks/02-capacity-planning/README.md)
  3. [Find Bottlenecks](04-scaling-the-system/01-estimating-bottlenecks/03-find-bottlenecks/README.md)
- **Scaling Concepts**
  1. [Vertical Scaling](04-scaling-the-system/02-scaling-concepts/01-vertical-scaling/README.md)
  2. [Horizontal Scaling](04-scaling-the-system/02-scaling-concepts/02-horizontal-scaling/README.md)
  3. [Stateless vs Stateful](04-scaling-the-system/02-scaling-concepts/03-stateless-vs-stateful/README.md)
  4. [Scaling Limits](04-scaling-the-system/02-scaling-concepts/04-scaling-limits/README.md)
- **Load Balancing**
  1. [What is a Load Balancer?](04-scaling-the-system/03-load-balancing/01-what-is-a-load-balancer/README.md)
  2. [Health Checks](04-scaling-the-system/03-load-balancing/02-health-checks/README.md)
  3. [Round Robin Algorithm](04-scaling-the-system/03-load-balancing/03-round-robin-algorithm/README.md)
  4. [Least Connections Algorithm](04-scaling-the-system/03-load-balancing/04-least-connections-algorithm/README.md)
  5. [Session Storage](04-scaling-the-system/03-load-balancing/05-session-storage/README.md)
  6. [Affinity Tradeoffs](04-scaling-the-system/03-load-balancing/06-affinity-tradeoffs/README.md)
  7. [Scale Web Tier](04-scaling-the-system/03-load-balancing/07-scale-web-tier/README.md)

### 5. Caching for Performance

- **Caching Fundamentals**
  1. [What is a Cache?](05-caching-for-performance/01-caching-fundamentals/01-what-is-a-cache/README.md)
  2. [In-Memory Caches](05-caching-for-performance/01-caching-fundamentals/02-in-memory-caches/README.md)
  3. [Distributed Caches](05-caching-for-performance/01-caching-fundamentals/03-distributed-caches/README.md)
  4. [What is a CDN?](05-caching-for-performance/01-caching-fundamentals/04-what-is-a-cdn/README.md)
  5. [The Cache Hit Ratio](05-caching-for-performance/01-caching-fundamentals/05-the-cache-hit-ratio/README.md)
- **Caching Policies & Patterns**
  1. [What to Cache](05-caching-for-performance/02-caching-policies-patterns/01-what-to-cache/README.md)
  2. [Cache-Aside Pattern](05-caching-for-performance/02-caching-policies-patterns/02-cache-aside-pattern/README.md)
  3. [Write-Through Pattern](05-caching-for-performance/02-caching-policies-patterns/03-write-through-pattern/README.md)
  4. [TTL & Freshness](05-caching-for-performance/02-caching-policies-patterns/04-ttl-freshness/README.md)
  5. [Cache Invalidation](05-caching-for-performance/02-caching-policies-patterns/05-cache-invalidation/README.md)
  6. [Cache Stampede](05-caching-for-performance/02-caching-policies-patterns/06-cache-stampede/README.md)
  7. [Why Evict Data](05-caching-for-performance/02-caching-policies-patterns/07-why-evict-data/README.md)
  8. [LRU Policy](05-caching-for-performance/02-caching-policies-patterns/08-lru-policy/README.md)

### 6. Asynchronous Communication

- **Queue Fundamentals**
  1. [Synchronous vs Asynchronous](06-asynchronous-communication/01-queue-fundamentals/01-synchronous-vs-asynchronous/README.md)
  2. [What is a Message Queue?](06-asynchronous-communication/01-queue-fundamentals/02-what-is-a-message-queue/README.md)
  3. [Producers and Consumers](06-asynchronous-communication/01-queue-fundamentals/03-producers-and-consumers/README.md)
  4. [Work vs Events](06-asynchronous-communication/01-queue-fundamentals/04-work-vs-events/README.md)
- **Reliability & Semantics**
  1. [Backpressure Handling](06-asynchronous-communication/02-reliability-semantics/01-backpressure-handling/README.md)
  2. [Delivery Semantics](06-asynchronous-communication/02-reliability-semantics/02-delivery-semantics/README.md)
  3. [Idempotent Consumers](06-asynchronous-communication/02-reliability-semantics/03-idempotent-consumers/README.md)
  4. [Dead-Letter Queues](06-asynchronous-communication/02-reliability-semantics/04-dead-letter-queues/README.md)
- **Ordering & Scale**
  1. [Ordering Tradeoffs](06-asynchronous-communication/03-ordering-scale/01-ordering-tradeoffs/README.md)
  2. [Consumer Scaling](06-asynchronous-communication/03-ordering-scale/02-consumer-scaling/README.md)

### 7. Scaling the Database

- **Replication vs Sharding**
  1. [Replication vs Sharding](07-scaling-the-database/01-replication-vs-sharding/01-replication-vs-sharding/README.md)
- **Data Partitioning**
  1. [The Database Bottleneck](07-scaling-the-database/02-data-partitioning/01-the-database-bottleneck/README.md)
  2. [Horizontal Partitioning](07-scaling-the-database/02-data-partitioning/02-horizontal-partitioning/README.md)
  3. [Vertical Partitioning](07-scaling-the-database/02-data-partitioning/03-vertical-partitioning/README.md)
- **Sharding Strategies**
  1. [Shard Key Checklist](07-scaling-the-database/03-sharding-strategies/01-shard-key-checklist/README.md)
  2. [Range-Based Sharding](07-scaling-the-database/03-sharding-strategies/02-range-based-sharding/README.md)
  3. [Hash-Based Sharding](07-scaling-the-database/03-sharding-strategies/03-hash-based-sharding/README.md)
  4. [The Hotspot Problem](07-scaling-the-database/03-sharding-strategies/04-the-hotspot-problem/README.md)
  5. [Cross-Shard Queries](07-scaling-the-database/03-sharding-strategies/05-cross-shard-queries/README.md)
  6. [Resharding Costs](07-scaling-the-database/03-sharding-strategies/06-resharding-costs/README.md)
  7. [Consistent Hashing](07-scaling-the-database/03-sharding-strategies/07-consistent-hashing/README.md)

### 8. System Reliability

- **Handling Failures**
  1. [Partial Failures](08-system-reliability/01-handling-failures/01-partial-failures/README.md)
  2. [Graceful Degradation](08-system-reliability/01-handling-failures/02-graceful-degradation/README.md)
  3. [Circuit Breakers](08-system-reliability/01-handling-failures/03-circuit-breakers/README.md)
  4. [SLOs and SLAs](08-system-reliability/01-handling-failures/04-slos-and-slas/README.md)
- **Consistency and Availability**
  1. [Network Partitions](08-system-reliability/02-consistency-and-availability/01-network-partitions/README.md)
  2. [The CAP Theorem](08-system-reliability/02-consistency-and-availability/02-the-cap-theorem/README.md)
  3. [Strong Consistency](08-system-reliability/02-consistency-and-availability/03-strong-consistency/README.md)
  4. [Eventual Consistency](08-system-reliability/02-consistency-and-availability/04-eventual-consistency/README.md)
- **Redundancy and Replication**
  1. [Single Point of Failure](08-system-reliability/03-redundancy-and-replication/01-single-point-of-failure/README.md)
  2. [What is Redundancy?](08-system-reliability/03-redundancy-and-replication/02-what-is-redundancy/README.md)
  3. [Database Replication](08-system-reliability/03-redundancy-and-replication/03-database-replication/README.md)
  4. [Failover Basics](08-system-reliability/03-redundancy-and-replication/04-failover-basics/README.md)

### 9. Observability

- **The Pillars of Observability**
  1. [What is Observability?](09-observability/01-the-pillars-of-observability/01-what-is-observability/README.md)
  2. [What are Metrics?](09-observability/01-the-pillars-of-observability/02-what-are-metrics/README.md)
  3. [What are Logs?](09-observability/01-the-pillars-of-observability/03-what-are-logs/README.md)
  4. [Understanding Alerts](09-observability/01-the-pillars-of-observability/04-understanding-alerts/README.md)
  5. [What is Tracing?](09-observability/01-the-pillars-of-observability/05-what-is-tracing/README.md)
- **Using Observability**
  1. [Golden Signals](09-observability/02-using-observability/01-golden-signals/README.md)
  2. [Dashboards vs Alerts](09-observability/02-using-observability/02-dashboards-vs-alerts/README.md)
  3. [Tracing Spans](09-observability/02-using-observability/03-tracing-spans/README.md)

### 10. Security Fundamentals

- **Transport & Secrets**
  1. [TLS Basics](10-security-fundamentals/01-transport-secrets/01-tls-basics/README.md)
  2. [Secrets Management](10-security-fundamentals/01-transport-secrets/02-secrets-management/README.md)
- **Security Foundations**
  1. [Threat Modeling Lite](10-security-fundamentals/02-security-foundations/01-threat-modeling-lite/README.md)
  2. [Defense in Depth](10-security-fundamentals/02-security-foundations/02-defense-in-depth/README.md)
  3. [Principle of Least Privilege](10-security-fundamentals/02-security-foundations/03-principle-of-least-privilege/README.md)
  4. [Hashing vs Encryption](10-security-fundamentals/02-security-foundations/04-hashing-vs-encryption/README.md)
- **API Security Basics**
  1. [Authentication Basics](10-security-fundamentals/03-api-security-basics/01-authentication-basics/README.md)
  2. [Authorization Basics](10-security-fundamentals/03-api-security-basics/02-authorization-basics/README.md)
  3. [What is Rate Limiting?](10-security-fundamentals/03-api-security-basics/03-what-is-rate-limiting/README.md)
  4. [Input Validation](10-security-fundamentals/03-api-security-basics/04-input-validation/README.md)

### 11. Final Certification

- **Course Review**
  1. [Key Takeaways](11-final-certification/01-course-review/01-key-takeaways/README.md)
- **Assessment & Certificate**
  1. [Review](11-final-certification/02-assessment-certificate/01-review/README.md)
