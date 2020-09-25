import React from "react";
import { FieldExtensionSDK } from "contentful-ui-extensions-sdk";
import { MultipleEntryReferenceEditor } from "@contentful/field-editor-reference";

interface FieldProps {
  sdk: FieldExtensionSDK;
}

const Field = (prop: FieldProps) => {
  prop.sdk.window.startAutoResizer();
  return (
    <MultipleEntryReferenceEditor
      sdk={prop.sdk}
      isInitiallyDisabled={false}
      viewType="link"
      parameters={{
        instance: {
          showCreateEntityAction: true,
          showLinkEntityAction: true
        },
      }}
      hasCardEditActions={true}
    />
  );
};

export default Field;
