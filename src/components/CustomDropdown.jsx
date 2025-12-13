import React, { useState, useMemo, useRef } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import globalStyle from '../utils/globalStyle';

const CustomDropdown = ({
  options = [], // [{ label, value }]
  value = null,
  onSelect = () => {},
  placeholder = 'Select',
  searchable = false,
  disabled = false,
  dropdownHeight = 240,
  style = {},
  itemStyle = {},
  placeholderStyle = {},
  containerStyle = {},
  label = null,
  labelStyle = {},
  dropdownStyle = {},
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const selectedLabel = useMemo(() => {
    const match = options.find(o => o.value === value);
    return match ? match.label : '';
  }, [options, value]);

  const filtered = useMemo(() => {
    if (!searchable || query.trim() === '') return options;
    const q = query.toLowerCase();
    return options.filter(o => (o.label || '').toLowerCase().includes(q));
  }, [options, query, searchable]);

  const handleSelect = item => {
    onSelect(item.value, item);
    setOpen(false);
    setQuery('');
  };
  const buttonRef = useRef(null);
  const [buttonLayout, setButtonLayout] = useState(null);

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {label && (
        <Text style={[globalStyle.font16Italic, styles.label, labelStyle]}>
          {label}
        </Text>
      )}
      <TouchableOpacity
        ref={buttonRef}
        activeOpacity={0.8}
        disabled={disabled}
        onPress={() => {
          buttonRef.current?.measureInWindow((x, y, width, height) => {
            setButtonLayout({ x, y, width, height });
            setOpen(true);
          });
        }}
        style={[styles.button, style, disabled && styles.disabled]}
      >
        <Text style={[globalStyle.font14ItalicB]}>
          {selectedLabel || placeholder}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <TouchableWithoutFeedback onPress={() => setOpen(false)}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>

        {buttonLayout && (
          <View
            style={[
              styles.modalWrap,
              {
                top: buttonLayout.y + buttonLayout.height + 6,
                left: buttonLayout.x,
                width: buttonLayout.width,
              },
            ]}
          >
            <View
              style={[
                styles.dropdown,
                { maxHeight: dropdownHeight },
                dropdownStyle,
              ]}
            >
              {searchable && (
                <TextInput
                  value={query}
                  onChangeText={setQuery}
                  placeholder="Search..."
                  style={styles.search}
                  clearButtonMode="while-editing"
                  autoCorrect={false}
                  autoCapitalize="none"
                />
              )}

              <FlatList
                data={filtered}
                keyExtractor={(item, idx) =>
                  String(item.value ?? item.label) + idx
                }
                keyboardShouldPersistTaps="handled"
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[styles.item, itemStyle]}
                    activeOpacity={0.7}
                    onPress={() => handleSelect(item)}
                  >
                    <Text style={[styles.itemLabel, globalStyle.font12ItalicB]}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                )}
                ListEmptyComponent={
                  <View style={styles.empty}>
                    <Text style={styles.emptyText}>No results</Text>
                  </View>
                }
              />
            </View>
          </View>
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { width: '100%' },
  button: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    elevation: 8,
  },
  disabled: { opacity: 0.6 },
  label: { color: '#222', marginBottom: 8 },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  modalWrap: {
    position: 'absolute',
    zIndex: 1000,
  },

  dropdown: {
    width: '100%',
    maxWidth: 360, // optional (looks nice on tablets)
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    alignSelf: 'center',
  },

  search: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  item: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  itemLabel: {
    color: '#222',
  },
  empty: { padding: 12, alignItems: 'center' },
  emptyText: { color: '#888' },
});

export default CustomDropdown;
