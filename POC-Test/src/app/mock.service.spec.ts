import { TestBed } from '@angular/core/testing';
import { MockService } from './mock.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { intData } from 'src/assets/intData';

describe('MockService', () => {
  let service: MockService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MockService]

    });

    service = TestBed.get(MockService);
    httpMock = TestBed.get(HttpTestingController);
  })
  it('should be created', () => {

    expect(service).toBeTruthy();
  });

  it('getMockData is working fine', () => {
    const mockPosts: intData[] = [
      {
        id: 123,
        name: "Neha",
        age: 25
      },
      {
        id: 234,
        name: "Sairaj",
        age: 35
      }
    ]

    service.getMockData().subscribe(user => {
      expect(user.length).toBe(2);
      expect(user).toContain(name);
      expect(user.values).toBe(123);
    })
const request = httpMock.expectOne(service.url);

expect(request.request.method).toBe('GET');

  });
});
