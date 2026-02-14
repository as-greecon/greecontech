# Architecture (Long-Term)

## Objective
Greecon will operate as one platform for energy, water, and agriculture operations with a shared data model and consistent operator experience.

## Target architecture
- **Web app (`apps/web`)**: operator UI, APIs, orchestration endpoints.
- **Edge app (`apps/edge`)**: local connector runtime at plant/site level.
- **Core packages (`packages/*`)**: domain model, policy, and data abstractions.
- **Cloud target (later)**: Google Cloud Run for web/edge services, Secret Manager for secrets, Cloud Logging for observability.

## Device integration path
- **Now (v0-v1):** HTTP ingestion endpoints only for simple bring-up.
- **Later:** MQTT, Modbus, OPC UA adapters in edge/runtime connectors.
- **Result:** diverse field protocols normalized into shared telemetry/events schema.

## Control command safety model (planned)
- Commands will require role-based permission checks.
- Sensitive commands will require approval workflows.
- Every command attempt and outcome must be written to immutable audit logs.
- Replay protection, idempotency keys, and command TTL will be added before production control features.
