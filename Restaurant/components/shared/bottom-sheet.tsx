
import React, {forwardRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import BottomSheet, {BottomSheetMethods} from '@devvie/bottom-sheet';

type ReusableBottomSheetProps = {
  children: React.ReactNode;
  height: string
};

const ReusableBottomSheet = forwardRef<
  BottomSheetMethods,
  ReusableBottomSheetProps
>(({children, height}, ref) => {
  return (
    <BottomSheet
        height={height || '64%'}
      customBackdropPosition="behind"
      backdropMaskColor="transparent"
      // dragHandleStyle={{display: 'none'}}
      
      ref={ref}
      style={styles.bottomSheet}>
      <View style={styles.sheetContent}>{children}</View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: '#fff',
     borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: '#000',
    // shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    // height: 800,
    shadowRadius: 4,
    // elevation: 5,
  },
  sheetContent: {
    paddingHorizontal: 14,
    paddingVertical:18,
  },
});

export default ReusableBottomSheet;
