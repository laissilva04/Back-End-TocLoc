export class HealthCheckController {
    healthCheck(_request, response) {
        response.status(200).json({
            message: "Hello World"
        });
    }
}