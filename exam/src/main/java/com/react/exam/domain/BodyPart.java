package com.react.exam.domain;

public class BodyPart {
    private String typeName;
    private String typeUrl;

    // 생성자
    public BodyPart(String typeName, String typeUrl) {
        this.typeName = typeName;
        this.typeUrl = typeUrl;
    }

    // Getter, Setter 메서드
    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public String getTypeUrl() {
        return typeUrl;
    }

    public void setTypeUrl(String typeUrl) {
        this.typeUrl = typeUrl;
    }

    @Override
    public String toString() {
        return "BodyPart{" +
                "typeName='" + typeName + '\'' +
                ", typeUrl='" + typeUrl + '\'' +
                '}';

    }
}

