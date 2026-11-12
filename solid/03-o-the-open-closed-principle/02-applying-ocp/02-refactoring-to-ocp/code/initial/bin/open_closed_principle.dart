import 'dart:io';

abstract class Discount {
  double apply(double price);
}

class RegularDiscount implements Discount {
  @override
  double apply(double price) {
    // TODO: Apply a 10% discount to the given price.
    return 0.0;
  }
}

class VIPDiscount implements Discount {
  @override
  double apply(double price) {
    // TODO: Apply a 20% discount to the given price.
    return 0.0;
  }
}

class NoDiscount implements Discount {
  @override
  double apply(double price) {
    // TODO: Return the original price without any discount.
    return 0.0;
  }
}

class PriceCalculator {
  final Discount discount;
  PriceCalculator(this.discount);

  double calculate(double price) => discount.apply(price);
}

void main() {
  final price = 100.0;
  final regular = PriceCalculator(RegularDiscount()).calculate(price);
  final vip = PriceCalculator(VIPDiscount()).calculate(price);
  final none = PriceCalculator(NoDiscount()).calculate(price);
  stdout.writeln('Regular: $regular');
  stdout.writeln('VIP: $vip');
  stdout.writeln('None: $none');
}
