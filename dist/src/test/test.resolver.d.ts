import { TestService } from './test.service';
export declare class TestResolver {
    private readonly testService;
    constructor(testService: TestService);
    testRawQuery(): Promise<boolean>;
}
