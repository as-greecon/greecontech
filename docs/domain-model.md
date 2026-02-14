# Domain Model (v0 foundation)

## Core entities
- **Tenant**: top-level business boundary (utility/company).
- **User**: operator identity belonging to one tenant.
- **Role**: permission profile (platform admin, manager, operator, viewer).
- **Site**: physical location (plant, station, farm block).
- **Asset**: monitored/controlled unit at a site.
- **Telemetry**: time-series measurements from assets.
- **Alarm**: detected condition requiring awareness or action.
- **Command**: requested control action sent to an asset.
- **Automation**: rule/workflow triggered by telemetry or events.
- **AuditLog**: immutable history of auth, config, and control actions.

## Multi-tenant isolation
- Every domain record must include `tenantId`.
- Queries and writes must always filter by `tenantId`.
- API handlers must derive `tenantId` from authenticated context (future phase).
- Cross-tenant reads/writes are forbidden by design.
