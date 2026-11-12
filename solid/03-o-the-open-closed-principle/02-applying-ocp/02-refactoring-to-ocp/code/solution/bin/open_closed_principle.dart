import 'dart:io';

abstract class Discount {
  double apply(double price);
}

class RegularDiscount implements Discount {
  @override
  double apply(double price) => price * 0.9;
}

class VIPDiscount implements Discount {
  @override
  double apply(double price) => price * 0.8;
}

class NoDiscount implements Discount {
  @override
  double apply(double price) => price;
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
