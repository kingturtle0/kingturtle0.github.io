---
emoji: 📖
title: RESTful API 알아보기
date: '2023-11-21 23:00:00'
author: kingturtle0
tags: blog gatsby theme 개츠비 테마
categories: 알아보기
---

#### REST(Representational State Transfer)의 약자로 자원을 이름으로 구분하여 해당 자원의 상태를 주고받는 모든 것을 말합니다.

### REST

1. HTTP URI(Uniform Resource Identifier)를 통해 자원(Resource)을 명시하고,
2. HTTP Method(POST, GET, PUT, DELETE, PATCH 등)를 통해
3. 해당 자원(URI)에 대한 CRUD Operation을 적용하는 것을 의미합니다.

> **💡CRUD Operation**
>
> CRUD는 대부분의 컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리 기능인 Create(생성), Read(읽기), Update(갱신), Delete(삭제)를 묶어서 일컫는 말로 REST에서의 CRUD Operation 동작 예시는 다음과 같습니다.

- Create : 데이터 생성(POST)
- Read : 데이터 조회(GET)
- Update : 데이터 수정(PUT, PATCH)
- Delete : 데이터 삭제(DELETE)

### **구성 요소**

REST는 다음과 같은 3가지로 구성이 되어있다.

1. **자원(Resource) : HTTP URI**
2. **자원에 대한 행위(Verb) : HTTP Method**
3. **자원에 대한 행위의 내용(Representations) : HTTP Message Pay Load**

### **특징**

1. Server-Client(서버-클라이언트 구조)
2. Stateless(무상태)
3. Cacheable(캐시 처리 가능)
4. Layered System(계층화)
5. Uniform Interface(인터페이스 일관성)

### **장단점**

장점

- HTTP 프로토콜의 인프라를 그대로 사용하므로 REST API 사용을 위한 별도의 인프라를 구축할 필요가 없습니다.
- HTTP 표준 프로토콜에 따르는 모든 플랫폼에서 사용이 가능합니다.
- Hypermedia API의 기본을 충실히 지키면서 범용성을 보장합니다.
- REST API 메시지가 의도하는 바를 명확하게 나타내므로 의도하는 바를 쉽게 파악할 수 있습니다.
- 여러 가지 서비스 디자인에서 생길 수 있는 문제를 최소화합니다.
- 서버와 클라이언트의 역할을 명확하게 분리합니다.

단점

- 표준 자체가 존재하지 않아 정의가 필요합니다.
- HTTP Method 형태가 제한적입니다.
- 브라우저를 통해 테스트할 일이 많은 서비스라면 쉽게 고칠 수 있는 URL이 아닌 Header 정보의 값을 처리해야 하므로 전문성이 요구됩니다.
