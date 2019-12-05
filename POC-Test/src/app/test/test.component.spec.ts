
import { TestComponent } from './test.component';
import { MockService } from '../mock.service';

fdescribe('TestComponent', () => {

  
it('should include name =  neha', () =>{
  let test = new TestComponent();
  expect(test.data[0].name).toContain('Neha');
})

it('array length should be 2', () =>{
  let test = new TestComponent(); 
  expect(test.data.length).toBe(2); 
})

it('should include age = 25', () =>{
  let test = new TestComponent();
  expect(test.data[0].age).toBe(25);
})

it('should include id = 123', () =>{
  let test = new TestComponent();
  expect(test.data[0].id).toBe(123);
})



});