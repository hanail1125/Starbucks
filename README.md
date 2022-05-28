# _**마크다운(MarkDown) 문법**_
***
***
# 제목(Header)

# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6
***
***


# 문장(Paragraph)

동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세
***
***

# 줄바꿈(Line Breaks)

동해물과 백두산이 마르고 닳도록<br/>
하느님이 보우하사 우리나라 만세<br/>
무궁화 삼천리 화려 강산<br/>
대한 사람 대한으로 길이 보전하세
***
***

# 강조(Emphasis)

_이텔릭체_<br/>
**두껍게**<br/>
**_이텔릭 + 두껍게_**<br/>
~~취소선~~<br/>
<u>밑줄</u><br/>
***
***

# 목록(List)

1. 순서가 필요한 목록
1. 순서가 필요한 목록
1. 순서가 필요한 목록
    1. 순서가 필요한 목록
    1. 순서가 필요한 목록
1. 순서가 필요한 목록

- 순서가 필요하지 않는 목록
- 순서가 필요하지 않는 목록
- 순서가 필요하지 않는 목록
    - 순서가 필요하지 않는 목록
    - 순서가 필요하지 않는 목록
- 순서가 필요하지 않는 목록
***
***

# 링크(Link)

<a href="https://google.com">구글</a><br/>
[구글](https://google.com)

<a href="https://naver.com" title="네이버로 이동!">NAVER</a><br/>
[NAVER](https://naver.com "네이버로 이동!")

<a href="https://naver.com" title="네이버로 이동!" target="_blank">NAVER</a><br/>

***
***

# 이미지 삽입

![](https://heropy.blog/css/images/logo.png)<br/>
[![](https://heropy.blog/css/images/logo.png)](https://heropy.blog)
***
***


# 인용문

> 남의 말이나 글에서 직접 또는 간접적으로 따온 문장.<br/>
> (네에버 국어 사전)

> 인용문을 작성하세요!
>> 중첩된 인용문
>>> 중첩된 인용문 1<br>
>>> 중첩된 인용문 2<br>
>>> 중첩된 인용문 3
***
***


# 인라인(inline) 코드 강조

CSS에서 `background` 혹은 `background-image` 속성으로 요소에 배경이미지를 삽입할 수 있다.
***
***

# 블럭(block) 코드 강조

```html
<a href="https://google.com" title="구글로 이동!" target="_blank">GOOGLE</a><br/>
```

```css
.list > li {
  position: absolute;
  top: 400px;
}
```

```javascript
fuction func() {
  let a = 'AAA';
  return a;
}
```

```bash
$ git commit -m 'Study Markdown'
```

```plaintext
동해물과 백두산이 마르고 닳도록
하는님이 보우하사 우리나라 만세
```
***
***


# 표(Table)

### position 속성

값 | 의미 | 기본값
:--|:--:|--:
static | 기존 없음 | O
relative | 요소의 자신 | X
absolute | 위치 상 부모 요소 | X
fixe | 뷰포트 | X
***
***

# 원시 HTML(Raw HTML)

동해물과 <u>백두산</u>이 마르고 닳도록<br>
<spab style="color: green">하느님</spab>이 보우하사 <span style="text-decoration: underline">우리나라 만세</span>

<a href="https://naver.com" title="네이버로 이동!" target="_blank">NAVER</a><br/>
<img width="70" src="https://heropy.blog/css/images/logo.png" alt="HEROPY"/>

***
***

# 수평선(Horizontal Rule)
---
***
___