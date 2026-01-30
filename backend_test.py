import requests
import sys
from datetime import datetime

class TransportAPITester:
    def __init__(self, base_url="https://karan-freight.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {response_data}")
                    return True, response_data
                except:
                    return True, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   Error: {error_data}")
                except:
                    print(f"   Error: {response.text}")
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test("API Root", "GET", "", 200)

    def test_contact_submission(self):
        """Test contact form submission"""
        contact_data = {
            "name": "Test User",
            "company": "Test Company Ltd",
            "email": "test@example.com",
            "phone": "+91 9876543210",
            "service_type": "Full Truck Load (FTL)",
            "message": "This is a test inquiry for freight transportation services. We need to transport goods from Delhi to Mumbai."
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "contact",
            200,
            data=contact_data
        )
        
        if success and response:
            # Verify response structure
            required_fields = ['id', 'name', 'email', 'service_type', 'message', 'status', 'created_at']
            for field in required_fields:
                if field not in response:
                    print(f"❌ Missing field in response: {field}")
                    return False
            
            if response.get('status') != 'new':
                print(f"❌ Unexpected status: {response.get('status')}")
                return False
                
            print("✅ Contact submission response structure is correct")
            return True
        
        return False

    def test_get_contact_inquiries(self):
        """Test retrieving contact inquiries"""
        return self.run_test("Get Contact Inquiries", "GET", "contact", 200)

    def test_status_check_creation(self):
        """Test status check creation"""
        status_data = {
            "client_name": "Test Client"
        }
        
        return self.run_test(
            "Status Check Creation",
            "POST",
            "status",
            200,
            data=status_data
        )

    def test_get_status_checks(self):
        """Test retrieving status checks"""
        return self.run_test("Get Status Checks", "GET", "status", 200)

def main():
    print("🚛 Starting Karan Singh Transport Services API Tests")
    print("=" * 60)
    
    # Setup
    tester = TransportAPITester()
    
    # Run all tests
    tests = [
        tester.test_api_root,
        tester.test_contact_submission,
        tester.test_get_contact_inquiries,
        tester.test_status_check_creation,
        tester.test_get_status_checks,
    ]
    
    for test in tests:
        test()
    
    # Print results
    print("\n" + "=" * 60)
    print(f"📊 Tests Summary: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed!")
        return 1

if __name__ == "__main__":
    sys.exit(main())