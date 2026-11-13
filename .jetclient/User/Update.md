```toml
name = 'Update'
method = 'PUT'
url = 'http://localhost:8000/user'
sortWeight = 3000000
id = '36de5e35-31bb-42ab-b1c0-2b862322ad5f'

[[headers]]
key = 'token'
value = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjgsImlhdCI6MTc5NDYwMzA0Nn0.2q0EMlFHbRfuOL7eE8KcS3hIXRXZs72OolHK8_esoyk'

[body]
type = 'JSON'
raw = '''
{
  "mobile" : "8095441880"
}'''
```
