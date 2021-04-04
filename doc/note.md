## 실전에서 느낀점을 적어라 

* marging은 형제 요소들의 간격을 조절하고 padding은 부모와 자식의 간격을 조절한다.

### 배경이미지 높이를 정할때 이미지가 있는 불록에 padding-bottom으로 정하자 

.image-container::after {
    content: "";
    display: block;
    /*这里的padding =  height / width*/
    padding-bottom: 25%;
}

